# Create a new data frame called
# pf.fc_by_age_months that contains
# the mean friend count, the median friend
# count, and the number of users in each
# group of age_with_months. The rows of the
# data framed should be arranged in increasing
# order by the age_with_months variable.

# For example, the first two rows of the resulting
# data frame would look something like...

# age_with_months  friend_count_mean	friend_count_median	n
#              13            275.0000                   275 2
#        13.25000            133.2000                   101 11


# See the Instructor Notes for two hints if you get stuck.
# This programming assignment will automatically be graded.

# DO NOT DELETE THESE NEXT THREE LINES OF CODE
# ========================================================================
pf <- read.delim('/datasets/ud651/pseudo_facebook.tsv')
pf$age_with_months <-pf$age + (1 - pf$dob_month / 12)
suppressMessages(library(dplyr))

# ENTER YOUR CODE BELOW THIS LINE
# ========================================================================


library(dplyr)

fc_by_age_months <- facebookData %.%
  group_by(age_with_months) %.%
  summarise(friend_count_mean = mean(friend_count)),
            friend_count_median = median(friend_count),
            n = n()) %.%
  arrange(age_with_months)

head(fc_by_age_months)

Important Notice! Please note that in newer versions of dplyr (0.3.x+), the syntax %.% has been deprecated and replaced with %>%. To run your code in the Udacity IDE you must use %.%, but if you are following along on your local machine and using R, this may produce warning messages, in which case you should use %>% instead.

Another warning: Version 0.4 of R has a bug when using the median function on the summarize layer, depending on the nature of the data being summarized. You may need to cast the data as a numeric (float) type when using it on your local machine, e.g. median(as.numeric(var)).

A few additional hints follow below:
  
  
  
  Hint 1: Use the group_by(), summarise(), and arrange() functions in the dplyr package to split the data frame by age_with_month. Make sure you arrange by the correct variable (it's not age anymore).



Hint 2: The code should look similar to the code when we split the data frame by age and found summaries. age_groups <- group_by(pf, age)
pf.fc_by_age <- summarise(age_groups,
                                                    friend_count_mean = mean(friend_count),
                                                    friend_count_median = median(friend_count),
                                                    n = n())
pf.fc_by_age <- arrange(pf.fc_by_age, age)

head(pf.fc_by_age)
