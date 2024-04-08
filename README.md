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

- 
