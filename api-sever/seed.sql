INSERT INTO quiz (question, correct_answer, incorrect_answer, can_edit)
VALUES ('Name a few Full Stack developer tools?', ARRAY['GitHub','CodePen','TypeScript','Electron','Visual Studio Code'], ARRAY['FaceBook', 'Myspace', 'Instagram'], FALSE),
('What is Multi-Threading?', ARRAY['Improving the process of performance of the CPU'], ARRAY['The use of Asynchronous functions', 'A pattern in web development that is used to improve pushing data from the server to the client', 'when you perform tuning in queries. which can be created to increase the performance of data retrieval'], FALSE),
('What is a connection leak in Java?', ARRAY['A situation when the developer forgets to close the JDBC connection'], ARRAY['when you forget to do a git push','When multiple asynchronous functions are chained together', 'a language which allows defining placeholders that should later on be replaced for the purpose of implementing designs.'], FALSE),
('Docker is an easy way to run virtual machines on your local machine or in the cloud. While they are not strictly separate machines and do not require an operating system to boot, they offer many of these benefits.', ARRAY['True'], ARRAY['False'], FALSE),
('What is normalization?', ARRAY['When you reduce data redundancy and data inconsistenly from the table. Data intgerrity is maintained and optimizes the usage of disk space.'], ARRAY['When you add redundancy to execute queries, Data intergrity is not maintained and does not optimize the disk spaces.'], FALSE),
('what is a API?', ARRAY[' a site is the code that permits two programming projects to speak with one another. It permits us to compose mentioning administrations from a working framework or other application.'], ARRAY['a real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful.', 'a collection of prewritten code that programmers can use to optimize tasks.'], FALSE),
('What is an event loop in Node.js?', ARRAY['a mechanism that expects and dispatches events or messages in a program'], ARRAY[' a template definition of the method s and variable s in a particular kind of object', ' A function that is able to iterate through each element in a array'], FALSE);



INSERT INTO scoreboard ( name, age, score)
 VALUES ('Bain', 23, 0),
('Fernando', 23, 0),
('Huy', 23, 0),
('Jerome', 23, 0);
