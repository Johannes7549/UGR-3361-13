const products = [
  {
    id: "1",
    title: "Organization Finance Tracking System using Blockchain",
    paragraph:
      "Financial tracking, also known as expense tracking, is the practice of keeping track of one’s income and spending on a daily basis. It is accomplished by recording receipts, invoices, and business expenses into some type of accounting ledger. It complements budgeting and is a useful tool for keeping track of business finances.",
    image1: "Images/Products/product1.jpg",
    image2: "Images/Products/product4.jpg",
    td1: "It is user-friendly.",
    td2: "It is easy to maintain.",
    td3: "This system helps in tracking the expenses of an organization.",
    td4: "",
  },
  {
    id: "2",
    title: "Website Vulnerability Scanning System",
    paragraph:
      "With the rapid development of the Internet, Web security issues have become increasingly prevalent; hackers will exploit Web vulnerabilities to infiltrate websites, resulting in numerous security incidents. Web vulnerability scanners on the market have a number of issues, including insufficient scanning accuracy, large software, low scalability, and so on. Traditional scanners generally obtain the URL of the website via a crawler, send a request to the website with attack parameters to obtain the payload, and output the corresponding vulnerability report if the payload is successfully verified.",
    image1: "Images/Products/product6.jpg",
    image2: "Images/Products/product4.jpg",
    td1: "It is easy to maintain.",
    td2: "Detects malware, SQL Injection, XSS attacks, and sub-domain scanning with ease",
    td3: "It is user-friendly.",
    td4: "",
  },
  {
    id: "3",
    title: "Online Fuel Delivery Flutter App",
    paragraph:
      "Companies that operate a fleet of vehicles such as taxi and cab companies, intercity and long-distance bus service operators, trucking agencies etc. often face troubles when it comes to refueling their vehicles. Having to drive all their vehicles to the fuel pump to have them filled often causes chaos and makes it difficult to maintain accurate track of the amount of fuel consumed",
    image1: "Images/Products/product3.jpg",
    image2: "Images/Products/product6.jpg",
    td1: "Fuels can be purchased Online",
    td2: "Gas Stations are not managed by the Admin directly.",
    td3: "Gas Station has no authority over price and fuel type.",
    td4: "",
  },
  {
    id: "4",
    title: "Patient Data Management System using Blockchain",
    paragraph:
      "The need for maintaining an accurate and infallible record of an individual’s medical records and bills can’t be understated. Reproducing these documents is essential to ensure that the insurance claim process goes about smoothly and without hinderance. Conventional methods of record keeping often prove to be inefficient and vulnerable to data leakage. Developed using Asp.Net This Blockchain-based Patient Data Management System has been designed to eliminate any scope of fraud or manipulation that could take place with respect to the processing of medical bills and the insurance claim.",
    image1: "Images/Products/product3.jpg",
    image2: "Images/Products/product7.jpg",
    td1: "Data is been added only by authorized bodies",
    td2: "Insurance company has the records of the hospital plus it can add data by user and verify if any record is tampered",
    td3: "",
    td4: "",
  },
  {
    id: "5",
    title: "Wireless Doorbell Calling System",
    paragraph:
      "Doorbell system conventionally have wired configuration which is laid across the home / office premises. This configuration fails in case of damage to the electrical lines or the expensive Bell equipment damages. The Wireless Doorbell Calling System can help evade both of these difficulties. We have two units in this project which are connected to each other through an RF link. The transmitter unit has a button attached to it for user interface.",
    image1: "Images/Products/product21.jpg",
    image2: "Images/Products/product15.jpg",
    td1: "With RF Encoder IC",
    td2: "",
    td3: "With RF Decoder IC",
    td4: "",
  },
  {
    id: "6",
    title: "Smart Burglar Alarm",
    paragraph:
      "Burglary is an unwanted event that no one wants to happen their premises. However it is difficult for anyone to be alert at all the times to protect their premises. This simple device Smart Burglar Alarm helps in this situation by raising an Alarm when there is an unwanted intrusion in the secured premises.The Smart Burglar Alarm is based on a loop of copper wire which is laid at the entrance of the secured area. When an intruder steps in breaking the loop, the system activates an alarm connected to the system. By hearing the alarm the resident of the office / home can get alert about the intrusion and a possible burglary. The alarm sounds till the system is turned OFF or the wire loop is connected back.",
    image1: "Images/Products/product22.jpg",
    image2: "Images/Products/product20.jpg",
    td1: " With Capacitors",
    td2: "",
    td3: " With Cables and Connectors",
    td4: "",
  },
  {
    id: "7",
    title: "Wireless FM Transmitter Mic",
    paragraph:
      "A Mic is used to transmit voice in the form of electrical signal to large speakers so that a large audience is able to hear to the speaker. But the Mic is limited by its length of cord. So, for the speaker to be free of wires we can propose a wireless Mic which operates with power backup of battery.The wireless FM Mic Project depends upon the FM technology. What we have in this system built is a FM modulator that modulates the input signal and then transmit it in the FM band through the antenna of the system. This input signal is the electrical pulse generated by Mic which acts as a transducer that converts the voice into electrical pulse. The transmitted FM waves can be received by any standard FM Radio receiver of cell phones having FM receiver integrated in them. In this way we can have a wireless FM Mic with the help of this project.",
    image1: "Images/Products/product23.jpg",
    image2: "Images/Products/product20.jpg",
    td1: "With Cables and Connectors",
    td2: "",
    td3: "With Transformer/Adapter",
    td4: "",
  },
  {
    id: "8",
    title: "Overvoltage And Undervoltage Protection System",
    paragraph:
      "This project aims to build a system that monitors voltage and provides a breakpoint based low and high voltage tripping mechanism that avoids any damage to the load. Various industrial and domestic systems consist of fluctuation in the AC mains supply. There is a chance of damaging electronic devices that are quite sensitive to these fluctuations. So there needs to be a tripping system that avoids any damage to these loads.Our system consists of a tripping mechanism that monitors the input voltage and trips according to limits provides. Here we use a quad comparator IC with two more comparators to be used as window comparators to it. Well the system delivers an error as soon as the input voltage falls out of the window range. This trigger then operates a relay that cuts off the load to avoid any damage to it. We here use a lamp to demonstrate as a load. Well the system is also configured with an alarm that goes on as soon as tripping takes place.",
    image1: "Images/Products/product24.jpg",
    image2: "Images/Products/product21.jpg",
    td1: "With Switch",
    td2: "",
    td3: "With IC Sockets",
    td4: "",
  },
  {
    id: "9",
    title: "Smart Time Table Generation Flutter App Using Genetic Algorithm",
    paragraph:
      "The manual method of creating timetables in colleges with big student populations takes a long time and frequently results in conflicts between different classes. Additionally, some faculty frequently adjust the timetable from the previous year, but incorporating changes is still a tedious process.",
    image1: "Images/Products/product8.jpg",
    image2: "Images/Products/product9.jpg",
    td1: "It is easy to maintain.",
    td2: "Faculty did not need to worry about time clashes.",
    td3: "The system is user-friendly.",
    td4: "",
  },
  {
    id: "10",
    title: "Dental Caries Detection System using Python",
    paragraph:
      "Dental caries is the most common oral health condition. Some studies have shown that only 21% of people go to dental clinics and hospitals for dental examinations. The rate might be significantly lower in low- and middle-income countries where dental examinations are expensive and not covered by insurance.Contrary to the accessible routine checkup, smartphones can be available and affordable in most countries. Thus, a smartphone-based diagnostic tool, which most of the population can easily access, could be a game changer in increasing the number of examinations of people with dental caries.",
    image1: "Images/Products/product3.jpg",
    image2: "Images/Products/product2.jpg",
    td1: "It is user-friendly.",
    td2: "",
    td3: "he system can easily detect dental caries.",
    td4: "",
  },
  {
    id: "11",
    title: "Speech Emotion Detection System using Python",
    paragraph:
      "While having a face-to-face conversation with another person, it is often possible to gauge their emotions through cues such as their expressions, body language etc. However, while having a telephonic conversation, it becomes very difficult to get a sense of the emotional state of an individual.",
    image1: "Images/Products/product11.jpg",
    image2: "Images/Products/product12.jpg",
    td1: "The system can recognize human emotions from speech, audio or recordings.",
    td2: "",
    td3: "It can help to resolve many problems by understanding emotions.",
    td4: "",
  },
  {
    id: "12",
    title: "Leaf Detection System using OpenCV Python",
    paragraph:
      "Computer Vision is a field of study that helps to develop techniques to recognize images and displays. It has different features like image recognition, object detection and image creation, etc. We can detect objects present in an image like a human face, animal face, eyes, etc. We can use OpenCV to detect objects present in an image. OpenCV has many pre-trained models based on its features.",
    image1: "Images/Products/product10.jpg",
    image2: "Images/Products/product11.jpg",
    td1: "It is easy to maintain.",
    td2: "It will also detect which type of leaf it is.",
    td3: "It is user-friendly.",
    td4: "The user can also be able to see the accuracy score.",
  },
  {
    id: "13",
    title: "Movie Success Prediction System using Python",
    paragraph:
      "Today, the trouble is that the more things change, the more they stay in the same horizons. Now, filmmaking in India is a multimillion-dollar industry employing over 6 million workers and reaching millions of people worldwide. In 2008 industry was valued at 107.1 billion rupees.With such a fortune and the employment of so many people at stake every Friday, it will be of immense interest to producers to know the probability of success or failure of a movie. Nevertheless, producers and distributors of new movies need to forecast box-office results in an attempt to reduce the uncertainty in the motion picture.",
    image1: "Images/Products/product8.jpg",
    image2: "Images/Products/product7.jpg",
    td1: "This application helps to find out the review of the new movie.",
    td2: "",
    td3: "Prediction of marketing budget.",
    td4: "",
  },
  {
    id: "14",
    title: "Speech Emotion Detection System using Python",
    paragraph:
      "While having a face-to-face conversation with another person, it is often possible to gauge their emotions through cues such as their expressions, body language etc. However, while having a telephonic conversation, it becomes very difficult to get a sense of the emotional state of an individual.",
    image1: "Images/Products/product14.jpg",
    image2: "Images/Products/product13.jpg",
    td1: "It can help to resolve many problems by understanding emotions.",
    td2: "",
    td3: "",
    td4: "",
  },
  {
    id: "15",
    title: "Blockchain based Loan Management System with Smart Contracts",
    paragraph:
      "Providing a loan should be a simple process. One should check the client’s eligibility to get the loan and then approve or deny the loan. Once approved, the customer should receive the funds. However, in traditional systems, this process is often chaotic for valid reasons. As the customer base increases, servicing loans becomes complex.",
    image1: "Images/Products/product10.jpg",
    image2: "Images/Products/product11.jpg",
    td1: "he customer can easily apply for a loan.",
    td2: "",
    td3: "The integration of blockchain incorporates easier, faster, and cheaper solutions.",
    td4: "",
  },
  {
    id: "16",
    title: "Movie Success Prediction System using Python",
    paragraph:
      "Today, the trouble is that the more things change, the more they stay in the same horizons. Now, filmmaking in India is a multimillion-dollar industry employing over 6 million workers and reaching millions of people worldwide. In 2008 industry was valued at 107.1 billion rupees.With such a fortune and the employment of so many people at stake every Friday, it will be of immense interest to producers to know the probability of success or failure of a movie. Nevertheless, producers and distributors of new movies need to forecast box-office results in an attempt to reduce the uncertainty in the motion picture.",
    image1: "Images/Products/product10.jpg",
    image2: "Images/Products/product11.jpg",
    td1: "This application helps to find out the review of the new movie.",
    td2: "",
    td3: "Prediction of marketing budget.",
    td4: "",
  },
  {
    id: "17",
    title: "Ultrasonic Glasses For the Blind",
    paragraph:
      "Visually impaired people often need assistance in day to day life for navigating through their residence and outside. Having a human assistance is not possible all the time and so a solution to this problem is being researched from a long time.Well here we develop a smart solution to this problem using ultrasonic glasses. Also the glasses are fitted with vibrator rather than a buzzer as constant buzzing sound would be more of a nuisance rather than help.",
    image1: "Images/Products/product20.jpg",
    image2: "Images/Products/product19.jpg",
    td1: " Ultrasonic Based Obstacle Detection",
    td2: "",
    td3: " No Need to Carry System as it is mounted on Wearable Glasses",
    td4: "",
  },
  {
    id: "18",
    title: "Social Distancing ID Card",
    paragraph:
      "The importance of social distance concept was raised during the COVID period. But as COVID is not fully eradicated social distancing will still be prevalent in coming time. The problem with social distancing is people tend to forget about it every now and then. Remind every person each time is not feasible.So here we develop a wearable social distancing ID card that will remind people to maintain social distancing whenever they are too close to some one else. This system will provide an automated way to ensure social distancing. The system makes use of an ultrasonic sensor along with an atmega microcontroller, a buzzer, some basic electronics components and pcb board to develop the system. The system provides an automated social distancing system.",
    image1: "Images/Products/product18.jpg",
    image2: "Images/Products/product20.jpg",
    td1: "With Atmega 328 Controller",
    td2: "",
    td3: "With Neck Strap",
    td4: "",
  },
  {
    id: "19",
    title: "Video Calling/Recording Smartphone Stand",
    paragraph:
      "COVID-19 brought the world on its knees starting from 2020 restricting outdoor movement and starting a brief era of work from home. This work from home culture relies heavily on video calling for communication. Also online video platforms have boosted the need for video recording which requires video recording and uploads.The problems with video calling and video recording include maintaining phone alignment and position. User needs to either hold phone in one arm to record or place on a stand on the desk which can record video from bottom up showing users face chin up and ceiling in background. Another issue is face lighting along with charging issue created by charging cable length limitation.",
    image1: "Images/Products/product17.jpg",
    image2: "Images/Products/product18.jpg",
    td1: "With Phone height adjustment upto 35 centimeters",
    td2: "",
    td3: "With Phone Alignment adjustment",
    td4: "",
  },
  {
    id: "20",
    title: "Ac to High Voltage DC Using Voltage Multiplier Circuit",
    paragraph:
      "Our project aims to develop a system that develops a high voltage DC upto 2KVolt using a 230V Ac input. The circuit uses capacitors along with diodes in a ladder based network as a voltage multiplier mechanism.Here we use a step by step transformer in order to step up the voltage. The secondary of the transformer output increases the voltage thus decreasing the current. Another way to step up the voltage is by making use of a voltage multiplier ckt. We mostly use voltage multipliers in order to provide high voltage in cases where low current is needed. Our system defines the mechanism to develop DC high voltage (upto 10 KiloV) from an AC single phase supply. In order to adhere to safety precautions our system restricts the multiplication factor to eight, in order to keep the output within 2KVolt. We use this concept in various electronic components including, oscilloscope, TV picture tubes, Washing machines as well as other industrial devices.",
    image1: "Images/Products/product20.jpg",
    image2: "Images/Products/product22.jpg",
    td1: "With Capacitor",
    td2: "",
    td3: "With Capacitor",
    td4: "",
  },
  {
    id: "21",
    title: "Wireless AC Power Detector Project",
    paragraph:
      "Many of us know what an electric shock is, isn’t it? Right from the day of advent of commercial distribution of electricity till today we have many live wires carrying AC current doing some harm or even sometimes killing some. This simple project has the capability to sense a flow of alternating current around its vicinity without even having a physical contact with the live wire. The concept of working behind this project is that a live wire has alternating current flowing through it. These also radiate from the wires and hence can be felt by a nearby sensing circuit which is properly tuned to do so. ",
    image1: "Images/Products/product24.jpg",
    image2: "Images/Products/product25.jpg",
    td1: "With Decade Counter IC",
    td2: "",
    td3: "With Buzzer",
    td4: "",
  },
  {
    id: "22",
    title: "Short Circuit Indicator Project",
    paragraph:
      "Short circuit condition is a condition in which the input terminals of a power supply get in electrical contact with each other causing huge current flow. This leads to very large heat generation which can damage the system and also pose a threat to people nearby it. Thus short circuit condition is necessary to be detected and be attended immediately. Short Circuit Indicator Project does the task of detecting the short circuit in a circuit in which it is connected automatically. With the help of regulator and a pair of transistor we lit up an indicator LED that glows only when there is short circuit event occurring. In this way one can easily understand the short circuit condition and take appropriate measure of cutting off the power supply and removing the short circuit. We have demonstrated the short circuit in our circuit board using a wire piece which has very low, close to zero value of resistance thus creating a short circuit at the source connector",
    image1: "Images/Products/product19.jpg",
    image2: "Images/Products/product20.jpg",
    td1: "With Diodes",
    td2: "",
    td3: "With Transistors",
    td4: "",
  },
  {
    id: "23",
    title: "Weekly Task Alerting System",
    paragraph:
      "Modern day-to-day life of people in major cities is very demanding and the schedules are equally hectic. In such times, it is practically impossible to keep a track of all the activities/ appointments. Many a times, it happens that we may miss an important task; for example: taking medicines, attending a meeting, returning library books, paying the bills etc. And this cycle can keep going on endlessly. The human mind is not designed to multitask, it needs to work things out one at a time. This requires us to maintain our focus on the task at hand, and as a result other important things take a backstage and some may even slip out of our minds. In order to address this problem, we have come up with a Weekly Task Alerting System.",
    image1: "Images/Products/product21.jpg",
    image2: "Images/Products/product22.jpg",
    td1: "With Transistors",
    td2: "",
    td3: "With PCB and Breadboards",
    td4: "",
  },
  {
    id: "24",
    title: "Driver Anti Sleep Device",
    paragraph:
      "In modern-times, owing to hectic schedules it becomes very difficult to remain active all the time. Imagine a situation where a person is driving home from work, dead tired after facing all the challenges of the day. His hands are on the wheel and foot on the pedal but suddenly he starts feeling drowsy, his eyes start shutting and his vision blurs and before he knows it, he’s asleep. Falling asleep on the wheel can lead to serious consequences, there may be accidents and people may even lose their lives. This situation is much more common then we notice and hence, it is very important to counter this problem. So to address this issue, we have come up with a Driver Anti-sleep Device. ",
    image1: "Images/Products/product23.jpg",
    image2: "Images/Products/product24.jpg",
    td1: "With 555 Timer IC",
    td2: "",
    td3: "With Transistors",
    td4: "",
  },
  {
    id: "25",
    title: "Wireless Doorbell Calling System",
    paragraph:
      "Doorbell system conventionally have wired configuration which is laid across the home / office premises. This configuration fails in case of damage to the electrical lines or the expensive Bell equipment damages. The Wireless Doorbell Calling System can help evade both of these difficulties. We have two units in this project which are connected to each other through an RF link. The transmitter unit has a button attached to it for user interface.",
    image1: "Images/Products/product21.jpg",
    image2: "Images/Products/product22.jpg",
    td1: "With RF Encoder IC",
    td2: "",
    td3: "With RF Decoder IC",
    td4: "",
  },
  {
    id: "26",
    title: "Smart Burglar Alarm",
    paragraph:
      "Burglary is an unwanted event that no one wants to happen their premises. However it is difficult for anyone to be alert at all the times to protect their premises. This simple device Smart Burglar Alarm helps in this situation by raising an Alarm when there is an unwanted intrusion in the secured premises.The Smart Burglar Alarm is based on a loop of copper wire which is laid at the entrance of the secured area. When an intruder steps in breaking the loop, the system activates an alarm connected to the system. By hearing the alarm the resident of the office / home can get alert about the intrusion and a possible burglary. The alarm sounds till the system is turned OFF or the wire loop is connected back.",
    image1: "Images/Products/product22.jpg",
    image2: "Images/Products/product20.jpg",
    td1: " With Capacitors",
    td2: "",
    td3: " With Cables and Connectors",
    td4: "",
  },
  {
    id: "27",
    title: "Wireless FM Transmitter Mic",
    paragraph:
      "A Mic is used to transmit voice in the form of electrical signal to large speakers so that a large audience is able to hear to the speaker. But the Mic is limited by its length of cord. So, for the speaker to be free of wires we can propose a wireless Mic which operates with power backup of battery.The wireless FM Mic Project depends upon the FM technology. What we have in this system built is a FM modulator that modulates the input signal and then transmit it in the FM band through the antenna of the system. This input signal is the electrical pulse generated by Mic which acts as a transducer that converts the voice into electrical pulse. The transmitted FM waves can be received by any standard FM Radio receiver of cell phones having FM receiver integrated in them. In this way we can have a wireless FM Mic with the help of this project.",
    image1: "Images/Products/product23.jpg",
    image2: "Images/Products/product21.jpg",
    td1: "With Cables and Connectors",
    td2: "",
    td3: "With Transformer/Adapter",
    td4: "",
  },
  {
    id: "28",
    title: "Overvoltage And Undervoltage Protection System",
    paragraph:
      "This project aims to build a system that monitors voltage and provides a breakpoint based low and high voltage tripping mechanism that avoids any damage to the load. Various industrial and domestic systems consist of fluctuation in the AC mains supply. There is a chance of damaging electronic devices that are quite sensitive to these fluctuations. So there needs to be a tripping system that avoids any damage to these loads.Our system consists of a tripping mechanism that monitors the input voltage and trips according to limits provides. Here we use a quad comparator IC with two more comparators to be used as window comparators to it. Well the system delivers an error as soon as the input voltage falls out of the window range. This trigger then operates a relay that cuts off the load to avoid any damage to it. We here use a lamp to demonstrate as a load. Well the system is also configured with an alarm that goes on as soon as tripping takes place.",
    image1: "Images/Products/product24.jpg",
    image2: "Images/Products/product19.jpg",
    td1: "With Switch",
    td2: "",
    td3: "With IC Sockets",
    td4: "",
  },
];
function getid(){
    let para = new URLSearchParams(window.location.search);
    let pass = parseInt(para.get("id"));
    console.log(pass);
    let selectedProduct = products[pass - 1];
    console.log(selectedProduct.image1);

    const name = document.getElementById("title");
  const paragraph = document.getElementById("paragraph");
    const selectImg = document.querySelector(".singleimage__image1");
    const selectImg2 = document.querySelector(".singleimage__image1");
    const desc3 = document.getElementById("td1");
    const desc4 = document.getElementById("td2");
    const desc5 = document.getElementById("td3");
    const desc6 = document.getElementById("td4");

    name.innerHTML = selectedProduct.title;
    paragraph.innerHTML = selectedProduct.paragraph;
    selectImg.src = selectedProduct.image1;
  selectImg2.src = selectedProduct.image2;
    desc3.innerHTML = selectedProduct.td1;
    desc4.innerHTML = selectedProduct.td2;
    desc5.innerHTML = selectedProduct.td3;
    desc6.innerHTML = selectedProduct.td4;
}