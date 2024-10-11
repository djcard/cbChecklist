# Creates a checklist framework in a Coldbox module

## Configuration

### Database

There are 4 tables needed to run this module. Migrations / Scripts for them are in the resources/database/migrations folder and can be installed locally.


### Environmental Variables

The following environmental variables need to be set even if this is simply used as a  personal checklist

clientCode: "", Any unique string to identify the person or group creating the checklists
dBaseName:"" Leave blank if setting a default datasource in the Application.cfc


## Basic Use

### Creating a checklist

Open the default view (index.cfm). An empty table should appear with a button for a New Checklist. Enter a new name then click on the execute tab.

In the Details area, give the checklist a name and, optionally, a description. 

Under Targets Enter the items which need to be done. Subitems can be added by clicking on "Add Child". Pay attention to the "save" buttons as they appear. Until they are clicked, that line is not written to the database. 

Each checklist can have one or more goals. For a simple checklist, this can simply be "done" and each target action will have one checkbox. Multiple goals can be used if there are several steps to be completed for each target. 

### Excuting a Checklist

Once a checklist has its Targets and Goals added, it can be executed. Choose the checklist from the Choose Tab then click Execute to see the rendered rows and columns. Clicking on a checkbbox will 


## Change Log

0.0.7 - Simplified UI to 2 screens with adding targets and goals from the same UI used to execute.
0.0.6 - fixed bug in saving and displaying results
0.0.5 - Added Reload Button to main UI
0.0.1 - Readme and formatting
0.0.0 - Initial upload
