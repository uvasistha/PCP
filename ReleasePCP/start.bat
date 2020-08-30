@ECHO OFF
start java -jar manager-0.0.1-SNAPSHOT.jar
timeout 20
start chrome http://localhost:5806/