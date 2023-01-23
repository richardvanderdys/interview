# Interview Task

There is a partial application contained in this directory.

Your task is to fill in the gaps and finish it.

## Application

This app keeps track of cases in a medical system.

There are 3 different personas in this example:

- Recorder
- Coder
- Reviewer

The Recorder's job is to input patient's name and details of their visit into the system
as a new case.

The Coder's job is to review those details and specify a `code` for the case.

The Reviewer's job is to review the `code` and visit details, and either send it to billing
or back to the coder to re-code.

## Case

- ID
- Patient Name
- Status (Open, Coded, Ready)
- Code
- Visit Details

## TODO

- Implement a file based database for the saved cases and API endpoints to read/write from
- Finish the recorder modal
- Render the saved cases on the board in their status column
- Fetch and render a case properly on the case details page
- Implement a coding/review helper tool for the case details page
- Implement the workflow buttons which change the state of each case in the case details page
