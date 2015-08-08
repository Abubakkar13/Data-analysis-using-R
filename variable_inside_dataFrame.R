
  
  # Create a new variable, 'age_with_months', in the 'pf' data frame.
  # Be sure to save the variable in the data frame rather than creating
  # a separate, stand-alone variable. You will need to use the variables
  # 'age' and 'dob_month' to create the variable 'age_with_months'.
  
  # Assume the reference date for calculating age is December 31, 2013.
  
  # This programming assignment WILL BE automatically graded. For
  # this exercise, you need only create the 'age_with_months' variable;
  # no further processing of the data frame is necessary.

# DO NOT DELETE THIS NEXT LINE OF CODE
# ========================================================================

# ENTER YOUR CODE BELOW THIS LINE
# ========================================================================
facebookData$age_with_months <- facebookData$age + (1 - facebookData$dob_month / 12)

facebookData$age_with_months <- with(facebookData, age + (1 - dob_month / 12))

#facebookData is but a vector
#both the method will work here.


