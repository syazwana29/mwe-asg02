# MWE AS3 ASSIGNMENT 2

# These are the steps to begin testing in Android Studio:

- Select "Open an existing Android Studio project" after starting Android Studio. 
- Open your project folder and choose the project file (generally ends in.iml).

Select the Test Mode:

- Make sure you have the proper testing mode once the project is open. JUnit is what you will use for unit testing.

# Include Dependencies for Testing:

- Open your app module's build.gradle file, which is often located at app/build.gradle.
- Verify that the dependencies you need for testing are in place. As an illustration:

dependencies { // JUnit unit testing implementation testImplementation 'junit:junit:4.13.2' }

# Make and Execute Tests:

- Make a test class and include test methods in it for unit testing. By choosing "Run" or "Debug" next to the test class, you may initiate these tests.
- Android Studio will show the test results in the "Run" or "Debug" window once the tests are finished. Verify the results to find out if the tests were successfully completed.

# These are the steps on the app, InsomniCare

# HOME PAGE
- It will show you 2 buttons that you can click, START and See All.
- START button will direct you to Start page where there is a timer.
- See All will direct you to Activity Summary Page where it shows the summarized version of what users have entered in tracker.

# MENU
- There will be 2 items, Sleep Educational Resouces and Music.
- Sleep Educational Resources contain links that direct users to a website that have in-depth understanding or tips on specified title.
- Music contains links that direct users to YouTube video according to each genres.

# ACTIVITY PAGE
- It will show you 3 cards, Sleep Plans, Sleep Tracker and Directed Interventions.
- Sleep Plans will direct you to the plans page.
- Sleep Tracker will direct you to the tracker page.
- Directed Interventions will direct you to the direction page.

# SLEEP PLANS PAGE
- Contain the time for user to sleep during week days and weekend.
 
# SLEEP TRACKER PAGE
- Contain tracked time of when user fell asleep and woke up at night.
- When user starts the timer, the tracker will start to track the time user fell asleep.
- When user stops the timer, the tracker will start to track the timer user wakes up.
 
# DIRECTED INTERVENTIONS PAGE
- Contains 3 cards, Trouble Falling Asleep, Awake in the middle of the night and Having Nightmare
- Each cards contain tips how to overcome or avoid the specified titles.
 
# PROFILE PAGE
- Contains contact details of user
