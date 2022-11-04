const fun = () => {

    let arr = [`Why did an old man fall in a well?
Because he couldn’t see that well`,

        `Why did the actor fall through the floorboards?
They were going through a stage`,

        `Why did a scarecrow win a Nobel prize?
He was outstanding in his field`,

        `Why are peppers the best at archery?
Because they habanero`,

        `What did the duck say after she bought chapstick?
Put it on my bill`,

        `What do you call a fake noodle?
An impasta`,

        `What did the three-legged dog say when he walked into a saloon?
“I’m looking for the man who shot my paw`,

        `How do you tell the difference between a bull and a cow?
It is either one or the udder`,

        `What’s red and smells like blue paint?
Red paint`,

        `What’s the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter`,


        `What do you call an illegally parked frog?
Toad`,

        `Why can’t you send a duck to space?
Because the bill would be astronomical`,

        `What does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon`,

        `What happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence`,

        `What did the mama cow say to the calf?
It’s pasture bedtime`,

        `How does a vampire start a letter?
Tomb it may concern`,

        `What did one plate say to the other?
Dinner is on me`,

        `Why do hummingbirds hum?
Because they don’t know the words`,

        `What do sprinters eat before a race?
Nothing. They fast`,

        `Two muffins are baking in an oven. One of them looks to the other and says, "Phew, it's getting hot in here" The other looks back and says, "Ack, A talking muffin"`,

        `What kind of dog does a magician have?
A Labracadabrador`,

        `What do you call an elephant that doesn’t matter?
An irrelephant`,

        `What do you get when you cross a rabbit with shellfish?
An oyster bunny`,

        `Where do polar bears keep their money?
In a snow bank`,

        `Why did the pony get sent to his room?
He wouldn’t stop horsing around`,

        `Where do cows go on Friday nights?
They go to the moo-vies`,

        `Why couldn't the pony sing “Happy Birthday?”
Because she was just a little hoarse`,

        `How do you make an octopus laugh?
With ten-tickles`,

        `How do you keep a bull from charging?
Take away its credit card`,

        `Why can’t a leopard hide?
Because he’s always spotted`,


        `What do you get when you cross a snail with a porcupine?
A slowpoke`,

        `What do frogs order at fast-food restaurants?
French flies`,

        `What do you get from a pampered cow?
Spoiled milk`,

        `What do you call an alligator who solves mysteries?
An investigator`,

        `Why is a snake difficult to fool?
You can’t pull its leg`,

        `What kind of socks do grizzlies wear?
None, they have bear feet`,

        `What did the dog say when it sat on sandpaper?
"Ruff`,

        `What's a cat's favorite dessert?
Chocolate mouse`,

        `What fish only swims at night?
Starfish`,

        `What does a triceratops sit on?
Its tricera-bottom`,


        `Ice cream who?
ICE CREAM SO YOU CAN HEAR ME`,

        `Which vegetable do sailors hate the most?
Leeks`,

        `What did the bunny say to the carrot?
It’s been nice gnawing you`,

        `What do you call a sad strawberry?
A blueberry`,

        `Why did the tomato blush?
Because it saw the salad dressing`,

        `What did the pizza say to the topping?
I never sau-sage a pretty face`,

        `What do you call a cheese that’s not yours?
Nacho cheese`,

        `Why did the cookie go to the nurse?
Because he felt crummy`,

        `What kind of room doesn’t have doors?
A mushroom`,

        `What kind of key opens a banana?
A mon-key`,

        `What happens when a grape gets run over crossing the street?
A traffic jam`,

        `Why do bees have sticky hair?
They use honeycombs`,

        `What does garlic do when it gets hot?
It takes its cloves off`,

        `Where does fruit go on vacation?
Pear-is`,

        `Why did the melons choose not to get married?
Because they cantaloupe`,

        `What does a lemon say when it answers the phone?
Yellow`,

        `What did one dried fruit say when another asked it to the movies?
It's a date`,

        `What does a cow call an earthquake?
A milkshake`,

        `Why did the man go to the yogurt museum?
To get a little culture`,

        `Why couldn't the sesame seed climb up the hill?
Because it was on a roll`,

        `Why can't you trust tacos?
Because they always spill the beans`,

        `Did you hear about the rancher who had 97 cows in his field?
When he rounded them up, he had 100`,

        `Why did two 4s skip dinner?
Because they already 8`,

        `Did you hear about the mathematician who’s afraid of negative numbers?
He’ll stop at nothing to avoid them`,

        `What did the triangle feel sorry for the circle?
Because it’s pointless`,

        `Why was the math book sad?
It had too many problems`,

        `Why couldn’t the angle get a loan?
Because his parents wouldn’t cosine`,

        `What do you call a number that can’t stay in one place?
A roamin’ numeral`,

        `Why should you never trust someone writing on graph paper?
Because they must be plotting something`,

        `What do you call two guys who love math?
Algebros`,

        `What do you get when you divide a Jack o' lantern by its diameter?
Pumpkin pi`,

        `Why was 6 afraid of 7?
Because 7, 8, 9`,

        `What did the 90° angle say after an argument?
"It turns out, I was right`,

        `What tool do mathematicians use most?
Multi-pliers`,

        `Why did the student get upset when their teacher called them average?
It was a mean thing to say`,

        `If a math teacher had four apples in one hand and five apples in the other hand, what would they have altogether?
Really big hands`,

        `What did the 0 say to the 8?
Nice belt`,

        `Why should you never start a conversation with pi?
It'll just go on forever`,

        `What is a bird’s favorite type of math?
OWL-gebra`,

        `Why do teenagers travel in groups of threes and fives?
Because they can’t even`,

        `Did you hear about the the circle that kept going to school?
It has 360°`]
    return arr[Math.floor(Math.random() * arr.length)];
}

let joke = fun();
console.log(joke);
document.getElementById("joke").innerHTML = joke;
