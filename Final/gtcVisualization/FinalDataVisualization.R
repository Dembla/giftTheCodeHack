library(plotly)
library(dplyr)

df <- read.csv('/Users/hardiksahi/Desktop/HackathonData/childFinalDF.csv')
df['duration'] = df['eventEndTime']-df['eventStartTime']
#df['cnt'] = 1


combineddf <- aggregate(cnt ~ clubID+eventID+eventName+duration, data=df, FUN = sum)

# CSV for club details
df_club = read.csv('/Users/hardiksahi/Desktop/HackathonData/clubCSVForR.csv')


# Merge the 2 csv's to get club info for child
merged_df <- dplyr::inner_join(combineddf,df_club, by='clubID')

#merged_df['cnt'] <-transform(merged_df, cnt = as.integer(cnt))
# Sort dataframe by column:
#s <-merged_df[order(merged_df$clubID),]

getEventsWithClubId <- function(df, cID){
  return(subset(df, df$clubID == cID))
}


getHoverText <- function(clubDF){
  clubName <- clubDF[1,"Title"]
  clubLocation <- clubDF[1,"CombinedAddress"]
  strToReturn <- paste('<b>ClubName:',clubName, '<br>Location:',clubLocation,'</b><br>')
  #print(clubName,nrow(clubDF))
  for(row in 1:nrow(clubDF)){
    corresRow = clubDF[row,]
    strToReturn <- paste(strToReturn,'<br>EventName:',corresRow$eventName,'<br>Duration(hrs):',corresRow$duration, '<br>Registered:',corresRow$cnt, '<br>')
  }
  return(strToReturn)
}

getTotalRegisteredCount <- function(clubDF){
  clubName <- clubDF[1,"Title"]
  countReg <- 0
  for(row in 1:nrow(clubDF)){
    corresRow <- clubDF[row,]
    countReg <- corresRow$cnt+countReg
  }
  #print(countReg)
  return(countReg)
}

d1 <- aggregate(cnt ~ clubID, data=merged_df, FUN = sum)
#clubIdHoverDF <- data.frame(clubID=integer(), text=character(), stringsAsFactors = FALSE)
index = 0
for(clubId in 101:190){
  index = index+1
  clubSpecificDF = getEventsWithClubId(merged_df, clubId)
  clubHoverText = getHoverText(clubSpecificDF)
  #clubRegCount = getTotalRegisteredCount(clubSpecificDF)
  if(index == 1){
    clubIdHoverDF<-data.frame(clubID=clubId, text=clubHoverText, stringsAsFactors = FALSE) #
  }
  else{
    clubIdHoverDF <- rbind(clubIdHoverDF, c(clubId, clubHoverText)) # ,clubRegCount
  }
}
clubIdHoverDF['clubID'] <-transform(clubIdHoverDF, clubID = as.integer(clubID))
#clubIdHoverDF['totalCount'] <-transform(clubIdHoverDF, totalCount = as.integer(totalCount))


fullFinal <- dplyr::inner_join(clubIdHoverDF,df_club, by='clubID')
finalClubDetailDF <- dplyr::inner_join(fullFinal,d1, by='clubID')
finalClubDetailDF$text<- paste(finalClubDetailDF$text,'<br><b>Total registerations:',finalClubDetailDF$cnt,'</b>')


g_na <- list(
  scope = 'north america',
  projection = list(type = 'Mercator'),
  showframe = FALSE,
  showcoastlines = FALSE,
  showland = TRUE,
  landcolor = toRGB("gray85"),
  subunitwidth = 1,
  countrywidth = 1,
  subunitcolor = toRGB("white"),
  countrycolor = toRGB("white")
)
#color = ~groupsInvolved,colors = "Dark2",symbol = I("circle"), size = ~best,
#armedConflict_4652 <- getEventsWithConflictId(armedConflict, 4652)[timeLineConflictColumn]
plotly_map <- plot_geo(finalClubDetailDF, lat = ~Latitude, lon = ~Longitude) %>% add_markers(color = ~Province,colors = "Dark2",size=~cnt,sizes=c(5,30), marker=list(sizeref=0.1, sizemode='area'),symbol = I("circle"),text = ~text, hoverinfo = "text")%>%layout( geo = g_na)
plotly_map


