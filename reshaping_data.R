# 
# 
# You can also restructure the data using the tidyr package. You can review examples and how to use the package in the Data Wrangling with R pdf.
# 
# The code to change the data frame from long format to wide (or tidy format) is shown below. I encourage you to read the Data Wrangling pdf and write code using the tidyr package before looking at the solution below.
# 
# 
# 
# 
# 
# install.packages("tidyr") # only need to run this once library(tidyr) spread(subset(pf.fc_by_age_gender, select = c('gender', 'age', 'median_friend_count')), gender, median_friend_count)
# 
# I think you will find the tidyr package easier to use than the reshape2 package. Both packages can get the job done.
# 
# An Introduction to reshape2 by Sean Anderson
# 
# Converting Between Long and Wide Format
# 
# Melt Data Frames
# This is a must pdf files for data wrangling with R 
#https://s3.amazonaws.com/udacity-hosted-downloads/ud651/DataWranglingWithR.pdf
