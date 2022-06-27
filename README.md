# Application Tracker - In Development

This website was created as a tool to track information about submitted applications during a job search. It was specifically designed with Software Engineer roles in mind, with the inclusion of a column to mark whether an online assessment was completed. It is still in development, but information about it's current state and future features to implement can be found below.

## Current State

The backend of the site is complete, implemented using Node, Express, and MongoDB/Mongoose. The collection has the following attributes:

- companyName:        
  - {type: String, required: true}
- submissionDate:     
  - {type: String, required: true}
- resumeVer:          
  - {type: Number, required: false}
- onlineAssess:       
  - {type: Boolean, required: false}
- phoneScreen:        
  - {type: Boolean, required: false}
- interview:          
  - {type: Boolean, required: false}
- interviewDate:      
  - {type: String, required: false}
- offerReceived:      
  - {type: Boolean, required: false}
- offerAmount:        
  - {type: Number, required: false}
- notes:              
  - {type: String, required: false}

Each of the boolean values are intended to be marked True if that particular stage was reached, False if not, and Null if not applicable or not reached yet.

The frontend of the site is currently in progress, and is being implemented with React.

## Future Features

Listed below are features to be implemented once the frontend is complete and the site has been styled.

- Add a column to the table to note the job title for the application
- Add user authentication
- Allow the user to edit the columns
  - Add additional columns with custom names
  - Delete unnecessary columns
  - Edit column names
- Create preset table templates with different default columns, to apply to different types of jobs
  - Add a template for school applications as well?
  - Allow users to save custom table templates
- Allow users to edit and add data inline, as opposed to using separate forms

