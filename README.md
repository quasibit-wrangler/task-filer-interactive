## Its a Task scheduler with csv back up support

### Interactive Record Keepin software 

A web app to collect tasks and pin them to a scheduler to be easily sceen and interacted with. currently geared towards farming.

Things you can do in this app
+ You can add new tasks with the easy to use Who-What-Where-When Post adder modal
+ you Can visit the default page to view the weekly calender, as well as observe currently active tasks
+ *additionally you can filter by location, date, type*
+ you can export it to a csv for adding it to an excell spreadsheet for accounting record purposes


#### Whats the point?

On the farm, spraying occurs daily in a seemingly erratic matter and chaotic timing. 
Currently ways of filing it is by paper or sending a text the accountant which is annoying and 
hard to view what is happening. With this, anyone on the network that this app is exposed to can 
view the current state of affairs, seeing if the location is currently workable, as well as stioring accurate records
without hassiling the office workers too much during their day either by phone or reading papers.

- Of Course, this can be extended to schedule any kind of calender

but thhe modals and text boxes will be geared towards an orchard currently.


#### How do i use this?

it gets a bit complicated ehre. 
The server will connect to localhost, and get port forwarded by the network. you can change 
the port specified in the .env file but other than that, to acceess it on your network you 
will need to pport forward your computer as well. and change the computers resolved paths to the right port as well.
