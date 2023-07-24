const generate = require('./generate');
const create = require('./create');
const getList = require('./getList');

const theme = 'King of the jungle';

// generate(theme).then(post => {
//     console.log(post)
// });


const post = {
    originalContent: 'Title: The King of the Jungle: A Majestic Tale of the Lion\n' +
      '\n' +
      'Introduction:\n' +
      'In the vast plains of Africa, where the sun casts its golden rays upon the land, reigns the true king of the animal kingdom - the mighty lion. With its majestic appearance, powerful aura, and unparalleled hunting skills, the lion is a true symbol of strength and dominance. Let us journey into the heart of the wild and explore the captivating world of the king of the jungle.\n' +
      '\n' +
      'Body:\n' +
      'Hidden within the lush grasslands and dense forests of Africa, the lion establishes its kingdom through sheer power and a fiercely protective nature. These regal creatures possess a distinctive coat of fur, with rich tawny colors that effortlessly blend with their natural surroundings. Towering manes crowning their heads distinguish the males and serve as a majestic emblem of their superiority.\n' +
      '\n' +
      'Social structures within lion prides are complex and tightly knit. Consisting of multiple females, their offspring, and one or two dominant males, prides enable these majestic animals to conquer the vast African wilderness. Female lions are the primary hunters, showcasing their exceptional teamwork as they strategize and execute their hunt, often taking down large prey species with ease. The male lions guard the territory and protect their offspring from rival males who seek to take over their reign.\n' +
      '\n' +
      'In the realm of the lion, roaring is an integral part of their language and holds great significance. The deep and resonant roars of a lion can be heard from miles away, not only serving to claim their territory but also to communicate with other pride members. The roar of a lion reverberates through the air, evoking feelings of awe and respect among all creatures who share its landscape.\n' +
      '\n' +
      "The lion's extraordinary physical attributes ensure its dominance as the supreme predator. Possessing immense strength in their sleek and muscular bodies, lions are capable of reaching speeds of up to 50 miles per hour in short bursts. Their sharp claws and powerful jaws can tear through flesh effortlessly, making them the apex predators of their habitat. But it is their patience, agility, and expert stalking skills that make them the unrivaled rulers of the wilderness.\n" +
      '\n' +
      'Conclusion:\n' +
      'As we reflect upon the captivating world of the lion, it becomes clear why it is truly the king of the jungle. With its majestic appearance, awe-inspiring roars, and powerful presence, the lion embodies the essence of grace, strength, and leadership. Their social structures, hunting skills, and regal stature elevate them to the position of the supreme predator, instilling a sense of admiration and wonder in our hearts. Let us cherish these magnificent creatures and strive to protect their natural habitats, ensuring that the true king of the jungle continues to reign with eternal grace.',
    parsedContent: {
      title: 'The King of the Jungle: A Majestic Tale of the Lion',
      introduction: 'In the vast plains of Africa, where the sun casts its golden rays upon the land, reigns the true king of the animal kingdom - the mighty lion. With its majestic appearance, powerful aura, and unparalleled hunting skills, the lion is a true symbol of strength and dominance. Let us journey into the heart of the wild and explore the captivating world of the king of the jungle.',
      body: 'Hidden within the lush grasslands and dense forests of Africa, the lion establishes its kingdom through sheer power and a fiercely protective nature. These regal creatures possess a distinctive coat of fur, with rich tawny colors that effortlessly blend with their natural surroundings. Towering manes crowning their heads distinguish the males and serve as a majestic emblem of their superiority.\n' +     
        'Social structures within lion prides are complex and tightly knit. Consisting of multiple females, their offspring, and one or two dominant males, prides enable these majestic animals to conquer the vast African wilderness. Female lions are the primary hunters, showcasing their exceptional teamwork as they strategize and execute their hunt, often taking down large prey species with ease. The male lions guard the territory and protect their offspring from rival males who seek to take over their reign.\n' +
        'In the realm of the lion, roaring is an integral part of their language and holds great significance. The deep and resonant roars of a lion can be heard from miles away, not only serving to claim their territory but also to communicate with other pride members. The roar of a lion reverberates through the air, evoking feelings of awe and respect among all creatures who share its landscape.\n' +
        "The lion's extraordinary physical attributes ensure its dominance as the supreme predator. Possessing immense strength in their sleek and muscular bodies, lions are capable of reaching speeds of up to 50 miles per hour in short bursts. Their sharp claws and powerful jaws can tear through flesh effortlessly, making them the apex predators of their habitat. But it is their patience, agility, and expert stalking skills that make them the unrivaled rulers of the wilderness.",
      conclusion: 'As we reflect upon the captivating world of the lion, it becomes clear why it is truly the king of the jungle. With its majestic appearance, awe-inspiring roars, and powerful presence, the lion embodies the essence of grace, strength, and leadership. Their social structures, hunting skills, and regal stature elevate them to the position of the supreme predator, instilling a sense of admiration and wonder in our hearts. Let us cherish these magnificent creatures and strive to protect their natural habitats, ensuring that the true king of the jungle continues to reign with eternal grace.'
    },
    image1: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-DJ3Z9Af9Jk655dkOgH1Panfc/user-6UiVla2VAP9KAzivUjTO4vTp/img-cX0HdDcpkYhyeEd9Q0j4EaSw.png?st=2023-07-24T16%3A53%3A30Z&se=2023-07-24T18%3A53%3A30Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-23T23%3A41%3A30Z&ske=2023-07-24T23%3A41%3A30Z&sks=b&skv=2021-08-06&sig=HCM1jYMDcYiYs23bafRlFf%2Bl7G4K5g4kspAmYiO2atE%3D',
    image2: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-DJ3Z9Af9Jk655dkOgH1Panfc/user-6UiVla2VAP9KAzivUjTO4vTp/img-xkNHWSFFy6LgHSHbY9MqPcJP.png?st=2023-07-24T16%3A53%3A30Z&se=2023-07-24T18%3A53%3A30Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-23T23%3A41%3A30Z&ske=2023-07-24T23%3A41%3A30Z&sks=b&skv=2021-08-06&sig=ZFTGIBHBUIWuImuG363rMKJ6fJu2cqkYp0jfh93/zSY%3D'
  };

create(theme, 'OpenAI ChatGPT', post);

getList();

