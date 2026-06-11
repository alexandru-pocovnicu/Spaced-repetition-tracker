# Testing

## Dropdown lists exactly 5 users

Manual test: I loaded the page with clear localStorage and checked that the dropdown contains exactly 5 users.

## No user selected on page load

Manual test: I refreshed the page and confirmed that the placeholder option is selected and no agenda is displayed.

## Users start with no agenda

Manual test: I ran `localStorage.clear()` in the browser console, refreshed the page, selected each user, and confirmed the "This user has no upcoming revisions" message appeared.

## Selecting a user loads their agenda

Manual test: I added topics to User 1 and User 2, switched between them, and confirmed each user only showed their own agenda.

## Empty agenda message

Manual test: I selected a user with no stored agenda and confirmed the no upcoming revisions message was shown.

## Form exists with topic input, date picker, and submit button

Manual test: I selected a user and confirmed the form displayed a topic text input, date picker, and submit button.

## Date picker defaults to today's date

Manual test: I selected a user and confirmed the date picker defaulted to today's date.

## Form validation

Manual test: I submitted the form with an empty topic and confirmed validation prevented submission. I also tested a topic containing only spaces.

## Submitting the form creates revision dates

Manual test: I added "Practice arrays" with start date 2027-07-19 and confirmed the agenda showed:
- 2027-07-26
- 2027-08-19
- 2027-10-19
- 2028-01-19
- 2028-07-19

## Agenda displays in chronological order

Manual test: I added multiple topics with different dates to the same user and confirmed the agenda was sorted from earliest to latest.

## Past dates are not displayed

Manual test: I added a topic with a start date one month ago and confirmed the one-week revision date was hidden because it was in the past.
Manual test: I added a topic with a start date 2 years ago and confirmed that no revision date was shown

## Unit test

Unit tests in `agenda.test.mjs`.

The test checks that `createAgendaItem()` creates exactly 5 revision dates and that the dates match the expected values.

## Accessibility

Manual test: I ran Lighthouse Snapshot mode and confirmed the accessibility score was 100, on starting page and after the page has displayed an agenda

## Deployment

Manual test: I opened the deployed Netlify site and confirmed the dropdown, form, storage, sorting, and agenda display worked.