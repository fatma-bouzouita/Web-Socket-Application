
# Bug Fixes for React and WebSocket Application

This repository contains a full stack application with identified bugs in the React frontend and WebSocket backend. The goal is to fix these bugs as part of a practical task for an interview process.

## Current Behavior
- Client is sending infinite API requests to the server in the `/user` path.
- Sending a message to the server through the input box results in flooding with responses.

## Expected Behavior
- Client should send only one API request to the server on `/user` path throughout its lifecycle.
- Sending a message to the server through the input field should result in the server replying back with the same message only once via WebSocket (Socket.IO).

## Instructions
1. **Repository Setup**:
   - Create a public Git repository and upload the initial codebase (With bugs) in the `main` branch.
   - Duplicate the `main` branch and create a new branch named `dev`.

2. **API Bug Fix**:
   - Create a new branch named `fix/api` to fix the REST API bug.
   - Implement necessary changes to ensure only one API request is sent to `/user`.

3. **Pull Request for API Fix**:
   - Make a pull request for the bug fix on the `dev` branch.

4. **WebSocket Bug Fix**:
   - Create another branch named `fix/websocket` to fix the WebSocket bug.
   - Ensure that the server responds back with the message sent via WebSocket only once.

5. **Pull Request for WebSocket Fix**:
   - Make another pull request for the WebSocket bug fix on the `dev` branch.

***Important***
> You must follow a clean code architecture as well as make sure to include comments if necessary.

After following these steps, the bugs in the application should be resolved. The Git repository link can be submitted for further review.