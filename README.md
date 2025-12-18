# My Great Book

Visit <https://pretextbook.org/documentation.html> to learn more.

# Summary of the Workflow in CLI

Open Terminal.

Navigate to your folder: cd my-project-folder

Run Build: pretext build web

View: pretext view web

================================================================
                    PRETEXT CLI CHEATSHEET
================================================================

1. DAILY WORKFLOW (The "Happy Path")
----------------------------------------------------------------
  Step 1: Go to your project folder
  $ cd /path/to/your/project

  Step 2: Build the Website
  $ pretext build web

  Step 3: Preview the Website (opens local server)
  $ pretext view web

  Step 4: Build the PDF (requires LaTeX installed)
  $ pretext build print


2. PROJECT MANAGEMENT
----------------------------------------------------------------
  Check your version:
  $ pretext --version

  Start a brand new book project:
  $ pretext new

  Update PreTeXt to the latest version:
  $ pip install --upgrade pretext

  Clean up (use if builds act weird or fail):
  $ pretext clean


3. KEYBOARD SHORTCUTS (When "pretext view" is running)
----------------------------------------------------------------
  Ctrl + C  :: Stop the local server and return to terminal.


4. TROUBLESHOOTING
----------------------------------------------------------------
  If a build fails, use verbose mode to see the error details:
  $ pretext build web -v