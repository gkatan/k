Meteor.startup(function(){
	/*
	Sound levels:
	1: p, m, h, w, b, n
	2: k, g, d, t, ng, f, y
	3: v, j, th (voiced), ch, sh
	4: r, l, s, z, th (unvoiced), zh, vocalic r.
	*/

	if (Phonetics.find({}).count()==0) {
		Phonetics.insert({
			sound: "L",
			level: "4",
			words: new Array ("leaf", "lamp", "laugh", "leg", "lunch", "lips", "late", "lucky", "lion", "lock", "dollar", "olive",
				"belly", "float", "jelly", "elbow", "shoelace","violin", "envelope", "toilet", "bell", "whale", "owl",
				"wall", "glass", "sleep", "slide", "please", "flower", "cloud"), 
			story1: new Array ("The little owl floated across the lake on a big leaf.",
				"The leaf was green and yellow and slid across the lake with ease.",
				"The owl was late for lunch with her friend, a sparrow named Flower.",
				"As she approached the shore, the owl could hear Flower ringing a little golden bell, signaling the start of the meal.",
				"\"Oh no, I'm so very late!\" the owl exclaimed, flapping her wings and leaping from the leaf.",
				"She flew to the shore and landed in front of Flower who stood holding her bell and laughing.",
				"\"What are you laughing at?\" the owl asked Flower.",
				"\"You looked so worried,\" Flower said, \"It's just lunch.\"",
				"\"I know it's just lunch,\" said the owl, \"But my belly is rumbling, and I was afraid all the food would be gone.\"",
				"Flower shook her head and led the owl into her home.",
				"\"I made sure to save you some,\" Flower said, putting her bell away, \"Now, let's eat!\""),
			story2: new Array ("Lucky the Lion was late.",
				"Lucky was late for lunch.",
				"Lucky's belly growled for a jelly sandwich and a glass of lemonade.",
				"Lucky smacked her lips.",
				"Lucky left her violin against the wall.",
				"She tied her shoelaces and left to meet her friend Flower the owl.",
				"Lucky and Flower laughed as they ate their late lunch."),
			story3: new Array ("Would you like to be a caterpillar?", 
				"If you were a caterpillar, you would eat leaves for lunch. Chomp! Chomp! Chomp!",
				"If you were a caterpillar, you would have lots and lots of legs.",
				"With all those legs, you could walk up walls!",
				"If you were a caterpillar, you would be lighter than a lollipop.", 
				"You could climb onto a flower and smell it up close.",
				"What do you think? Would you like to be a caterpillar?")}),
		Phonetics.insert({
			sound: "R",
			level: "4",
			words: new Array ("run", "rat", "red", "rose", "raccoon", "rose", "rain", "race", "fruit", "bird", "carrot", "bear",
				"cherry", "ready", "store", "first", "every", "start", "crayon", "drawer", "friend", "dinosaur",
				"morning", "journey", "discover", "return", "orange", "realize", "forest", "borrow"), 
			story1: new Array ("Red the rat ran around racing Riley for rice.",
				"Riley said \"Look Red, a bed! Wouldn't it be nice,",
				"To have our rice like rich old mice, relaxed on pillows and sheets?",
				"We'd feast like kings, with all but the rings! A grand old place to eat!\"",
				"So Red and Riley scrambled up to eat their rice like royals,",
				"But on a sheet, Red lost his feet, and their plans were nearly foiled.",
				"Then Riley flailed around his tail, to help Red get a grip.",
				"Red grasped it tight, with all his might, and struggled not to slip.",
				"Red and Riley reached the top, relieved to climb no more.",
				"They slept like kings, with all but the rings, while the rice still lay on the floor."),
			story2: new Array ("\"Run away, Robert Rat,\" cried Rose Raccoon, \"run!\"",
				"Robert Rat put down the cherry he was eating.",
				"\"Why?\" he growled. \"Is it a tornado? Or a bear? Wait -- don't tell me -- a dinosaur is coming.\"",
				"\"Don't be grumpy,\" replied Rose Raccoon, \"but help to spread the alarm to everyone in the forest -- a dragon is nearby, with a prince chasing it!\"",
				"Robert Rat started to run, then realized Rose Raccoon was wrong.",
				"\"The orange dragon? Don't be ridiculous...he's nice, just like a big, scaly bird.\"",
				"\"Oh good,\" said Rose Raccoon. \"My heart was racing; I was terrified! Maybe we can all be friends!\""),
			story3: new Array("Run Dragon, Run!",
				"Dragon must win the race to win the heart of the prince.",
				"Raccoon stopped running when he smelled rice.",
				"Rat stopped running when she smelled rain.",
				"Bear stopped running when they smelled the forest.",
				"Dinosaur would rather draw his friend Dragon winning the race than run.",
				"Bird gave Dinosaur an orange crayon and a red crayon to draw the race.",
				"Dragon won the heart of the prince!")}),
		Phonetics.insert({
			sound: "F",
			level: "2",
			words: new Array("face", "phone", "food", "fish", "fan", "fox", "feet", "off", "elf", "muffin", "fingers", "wife", "fire",
				"unfold", "traffic", "alphabet","cough", "elephant", "laughing", "barefoot", "playful", "feather", "funny",
				"waffle","favorite", "family", "trophy", "photo", "breakfast", "giraffe"), 
			story1: new Array ("Felicity is a fun, five year-old girl who loves to run.",
				"She runs so fast that she sometimes falls over her own feet on rough ground.",
				"When she does, Felicity has to laugh.",
				"Felicity finds it funny when she finds herself on the floor.",
				"Felicity's family follows her as fast as they can, but Felicity is back on her feet and racing off before they catch up.",
				"Running is Felicity's favorite way to have fun."),
			story2: new Array("Felix the Elf's favorite breakfast is french toast.",
				"His best friend is Fred.",
				"Fred's family makes pancakes in the shape of giraffes and elephants.",
				"Felix's face at the sight of giraffe and elephant shaped pancakes makes Fred's family laugh.",
				"Felix's favorite breakfast food is french toast.",
				"But he loves Fred's family's pancakes too."),
			story3: new Array()}),
		Phonetics.insert({
			sound: "K",
			level: "2",
			words: new Array("can", "coin", "cold", "key", "cold", "cool", "car", "cat", "kid", "color", "because", "soccer", "bike",
				"bacon", "baker", "looking", "pumpkin", "weekend", "chocolate", "jacket", "music", "awake", "cupcake",
				"duck", "cheek", "hawk", "lick", "kindergarten", "computer", "stomach"), 
			story1: new Array ("It is the weekend.",
				"It is cold, and we need to wear a jacket.",
				"We can wake up early to pick pumpkins and bake pumpkin cupcakes with bacon frosting.",
				"If you get frosting on your cheek, my cat will lick it off.",
				"After the cool day of picking pumpkins and baking cupcakes, my stomach grumbles.",
				"Give me a cupcake!",
				"Next time we should make chocolate cupcakes with cinnamon frosting."),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "B",
			level: "1",
			words: new Array ("baby", "bakery", "banana", "becoming", "bedtime", "bedroom", "buddy", "bug", "bee", "bunny", "about",
				"alphabet", "blueberry", "cowboy", "ladybug", "neighbor", "October", "rabbit", "marbles", "basketball",
				"crab", "web", "rub", "club", "bathtub", "cube", "prescribe", "subscribe", "doorknob", "wardrobe"), 
			story1: new Array ("Buddy is a baby bunny.",
				"Buddy's neighbor, Bert Rabbit, subscribes to Becoming a Cowboy magazine.",
				"Bert's wardrobe is full to the brim with cowboy clothing.",
				"Buddy wants to know about the cowboy club.",
				"He peers into Bert's bedroom.",
				"Buddy wants to be Bert Rabbit when he grows up.",
				"But for now Buddy goes to the bakery to get a banana bundt cake to share with Bert."),
			story2: new Array("The little baby bunny, Bobby, was bouncing about the bedroom looking for his basketball.",
				"Bobby's bedtime was in about an hour and he badly wanted to bounce his basketball.",
				"Betty the bug bellowed from the bathtub, \"Bobby somebody bounced your ball into the bath.\"",
				"Bobby was becoming sleepy and replied \"I'll be back in the morning to get my ball, Betty\".",
				"Bobby felt better knowing where his ball had been."),
			story3: new Array("It was bedtime, and things were bumpy for Brianna.",
				"She'd been beginning to bathe when she saw a bug in the tub.",
				"She bounced backwards, becoming frightened.",
				"Turning the doorknob to open the door, she bounded into her bedroom to grab a basketball from beneath the wardrobe.",
				"She found her baby brother's alphabet blocks and blue stuffed bunny before she saw the ball.",
				"Bouncing it beside her, Brianna went back into the bathroom and was about to bash the bug when she saw it was actually a beautiful ladybug.",
				"So, instead, she bumped the bug onto her finger and balanced her new buddy there while she went into the backyard.",
				"She put the bug on a bush and blinked as it buzzed off into the black night.")}),
		Phonetics.insert({
			sound: "H",
			level: "1",
			words: new Array ("ham", "hall", "hand", "hero", "happy", "hair", "hoop", "helmet", "hair", "horse", "house", "beehive", "behind", 
				"unhappy", "uphill", "playhouse", "hamburger", "hearing", "forehead", "lighthouse", "groundhog", "downhill",
				"helicopter", "holiday", "half", "hundred", "history", "honeybee", "hippopotamus", "handkerchief", "Hawaii", "hallelujah"), 
			story1: new Array ("How happy is your hippopotamus?",
				"Have you give him a house?",
				"Have you given her some honey?",
				"Does he want some hair or a helicopter or a helmet?",
				"Does your hippopotamus need a hero?",
				"Have you told her the history of the hippopotamus?",
				"Take him to the playhouse! Take her to the concert hall!",
				"Make your hippopotamus happy when you clap your hands for their history."),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "M",
			level: "1",
			words: new Array ("man", "map", "march", "mall", "meet", "miss", "milk", "mine", "moose", "mom", "timer", "human",
				"numbers", "family", "famous", "palm", "gum", "blossom", "time", "daydream", "extreme", "wisdom", "tomato", "maybe",
				"machine", "marshmallow", "magnificent", "macaroni", "memorization", "chameleon"), 
			story1: new Array ("Meet Miss Moose Mom.",
				"Miss Moose Mom has a map to a magnificent machine under a famous palm tree.",
				"The machine gives humans extreme wisdom.",
				"Whoops! Miss Moose Mom dropped her marshmallow macaroni into the machine!",
				"Maybe Miss Moose Mom was not the right woman for this map.",
				"Maybe Miss Moose Mom should meet Mr. Chameleon for a march down Gum Drop Mall instead.",
				"Meet Miss Blossom Mime.",
				"She has a magnificent map."),
			story2: new Array("It was March, and Michael was at the market with his family.",
				"Munching his gum, he daydreamed while his mom mumbled about milk and tomatoes.",
				"\"Why tomatoes?\" he muttered. \"Why can't we get something magnificent to munch, like marshmallows or macaroni?\"",
				"\"Michael!\" his mom admonished.  \"You're missing the point -- we need healthy meals.",
				"Your musings about extremely junky food only show your lack of wisdom.\"",
				"\"Mother!\" Michael moaned. \"I miss mac and cheese!",
				"Maybe I'll just make a macaroni and cheese machine, then.\""),
			story3: new Array()}),
		Phonetics.insert({
			sound: "Z",
			level: "4",
			words: new Array ("zipper","zoo", "zero", "zebra", "zigzag", "zombie", "zillion", "zap", "present", "puzzle", "dessert",
				"busy", "lizard", "musical", "blizzard", "raisin","easily", "amaze", "horizon", "closet", "dozen",
				"cheese", "knees","cookies", "fingers", "sunrise", "sneeze", "visit", "bees", "bananas", "raspberry"), 
			story1: new Array ("The busy lizard was eating a raspberry cookie for dessert one day.",
				"The cookie was a present from her zebra friend from the zoo.",
				"Ms lizard decided to make make a surprising present for Mr Zebra.",
				"Mr Zebra had a closet with dozens of tasty desserts but nothing healthy.",
				"Ms Lizard made a snack plate with bananas, peaches, raspberries and swiss cheese.",
				"It was easily the best present for Mr Zebra and he thanked her a zillion times!"),
			story2: new Array("Give me a zombie.",
				"Wait! Give me a zombie with a zillion raspberry cream cheese turnovers.",
				"Too many bees! Give me a zebra.",
				"Wait! Give me a zebra in a zoo with a busy musical jamboree.",
				"I'm going to sneeze! Give me a bunch of bananas.",
				"Wait! Give me a bunch of bananas in a puzzle with a sunrise on the horizon and a dozen cookies. Please!"),
			story3: new Array("Most people don't know it, but zebras have to zip up their suits every sunrise before they come out of their closets and amaze their visitors.",
				"It isn't easy. The suits are a puzzle as they zig and zag in a zillion directions.",
				"Not only that, but zebras knees stop their hooves from reaching the zippers.",
				"And, of course, zebras don't have fingers.",
				"But it must be done, otherwise the zebras turn into sneezing zombies.",
				"In the wild, even in a blizzard, Zebras work with lizards to zip their suits.",
				"In return they present the lizards with a dozen cheese cookies with raisins, bananas and raspberries - for dessert.",
				"But in zoos, they have zero help from lizards.",
				"Instead, they beg otherwise busy bees to help them.",
				"But bees can't zip as easily.",
				"So, if you look closely, you might see a badly zipped suit adorning a sneezing zombie zebra.")}),
		Phonetics.insert({
			sound: "S",
			level: "4",
			words: new Array ("sit","soup","salt","seal","sick","sing","sun","save","seed","seat","baseball","dancer","gasoline",
				"grasshopper","motorcycle","fossil","pencil","muscle","beside","racing","bus","face","ice","grass","horse","yes",
				"address","office","purse","glass"),
			story1: new Array ("Sun loves racing.",
				"Sun races a grasshopper in the grass. Sun wins.",
				"Sun races a horse next to the post office. Sun wins.",
				"Sun races a motorcycle near the baseball field. Sun wins.",
				"Sun races for a seat on the bus besides a face that smiles like the sun.",
				"Oh, that face is Sun! Sun wins."),
			story2: new Array("The seal sat in the sun and licked salt.",
				"The grasshopper sang a song to the seal.",
				"The horse skipped beside the racing bus.",
				"The baseball was in the dancer's purse.",
				"The dancer rode the motorcycle to the office.",
				"The bus was racing next to the motorcycle.",
				"The dancer, grasshopper and horse all sat on the bus and sang a song about soup."),
			story3: new Array()}),
		Phonetics.insert({
			sound: "W",
			level: "1",
			words: new Array ("one", "wait", "walk", "wall", "want", "warm", "Milky Way", "wash", "watch", "we", "always", "awake",
				"award", "cobweb", "driveway", "highway", "homework", "housework", "jaguar", "kiwi", "one-way street", "pocket watch",
				"rewarded", "sandwiches", "spider web", "tidal wave", "unaware", "walk away", "wide awake", "wishing well"),
			story1: new Array("One warm Wednesday, there was a wild wild storm.",
				"A walnut named Wendy washed up on the shore.",
				"Wendy wasn't well, with a crack in her shell.",
				"And the wind all around her was starting to roar.",
				"A walrus named Walter was asleep on the beach,",
				"Where the wind from the water was starting to screech.",
				"Walter awoke, in no mood for a joke,",
				"And found Wendy the walnut stuck between his teeth.",
				"Wendy wiggled free, out from Walter's bite,",
				"Just when Walter was waddling away for the night.",
				"But Wendy stopped rolling, and Walter stopped strolling,",
				"And Wendy and Walter became best friends for life."),
			story2: new Array("Once there was a jaguar who was unaware that he liked kiwi.",
				"He'd stay wide awake, walking along the driveway walls that line one-way streets and watching the Milky Way, just trying to imagine the reward he wanted.",
				"But he didn't know what it was.",
				"Then a wacky walrus washed up in a tidal wave and waxed poetic on the wonders of kiwi.",
				"In one second, the jaguar knew what he wanted.",
				"But no highway led to New Zealand.",
				"So he did his homework and offered to wash the walrus.",
				"And as a reward, the walrus gave him a ride below the waves.",
				"And now the jaguar eats wagonloads of kiwi in New Zealand."),
			story3: new Array()}),
		Phonetics.insert({
			sound: "Y",
			level: "2",
			words: new Array("use", "used", "yard", "yarn", "yawn", "yawned", "yes", "yell", "yet", "yelled", "you", "kayak", "lawyer",
				"loyal", "New Year", "New York", "reuse", "reused", "royal", "yo-yo", "European", "ukulele", "unanimous", "unicycle",
				"United States", "universal", "university", "U.S. Post Office", "utilization", "Yugoslavia"),
			story1: new Array("Most European yards are very small.",
				"They need to utilize them very carefully.",
				"But not royal yards, or yards in Yugoslavia.",
				"Royal yards in Yugoslavia are unanimously considered the largest in Europe.",
				"(They do not compare, of course, with university yards in New York.)",
				"You could could stand in such a yard and yell 'yes' as loud as you'd like, and the royals would just yawn.",
				"But if you play the ukulele to a loyal royal lawyer, or play with a yarn yo-yo while riding a unicycle,",
				"Then the king and queen might notice,",
				"And give you your own large European yard for New Years."),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "SH",
			level: "3",
			words: new Array("shape", "shirt", "shoe", "ship", "chef", "shadow", "shot", "shut", "shop", "shy", "bushes", "dishes",
				"lotion", "flashlight", "fishing", "ocean", "milkshake", "pushing", "toothbrushes", "addition", "brush", "fish",
				"push", "dish", "cash", "leash", "wash", "trash", "eyelash", "bush"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "CH",
			level: "3",
			words: new Array("chair", "chat", "chase", "check", "cheese", "cheer", "chest", "chew", "child", "chick", "catcher",
				"crutches", "grandchild", "hatching", "inches", "ketchup", "kitchen", "key chain", "matches", "lunchbox", "beach",
				"couch", "bench", "stretch", "pitch", "catch", "patch", "reach", "march"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "V",
			level: "3",
			words: new Array("vest", "van", "vine", "vote", "vet", "vase", "vaccuum", "valley", "vampire", "vowels", "driveway",
				"shaving", "seven", "carnival", "envelope", "beaver", "seventy", "travel", "beverage", "heavy", "glove", "sleeve",
				"olive", "dove", "cave", "love", "five", "beehive", "brave", "drive"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "G",
			level: "2",
			words: new Array("goose", "gate", "gas", "gift", "go", "gulp", "good", "gone", "guess", "give", "dragon", "luggage",
				"cougar", "tiger", "eagle", "merry-go-round", "tugboat", "pigpen", "again", "wagon", "bug", "dog", "leg", "bag", "mug",
				"big", "rag", "pig", "Doug", "frog"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "P",
			level: "1",
			words: new Array("pencil", "party", "pig", "pickle", "pony", "penny", "penguin", "parrot", "pizza", "pirate", "diaper",
				"hippo", "apple", "teepee", "wallpaper", "grasshopper", "zipper", "mopping", "super", "octopus", "lamp", "mop", "soup",
				"ship", "sheep", "tape", "asleep", "rope", "checkup", "envelope"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "T",
			level: "2",
			words: new Array("teeth", "tire", "toast", "toy", "teacher", "two", "toad", "tiger", "turkey", "taco", "button", "guitar",
				"kitten", "mittens", "potato", "eighteen", "rotten", "hotel", "cotton", "motel", "bat", "boat", "cat", "fruit", "goat",
				"hat", "coat", "light", "nut", "chocolate"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "J",
			level: "3",
			words: new Array("germs", "jam", "jar", "jaw", "jeans", "jet", "job", "jog", "joke", "joy", "agent", "badger", "cages",
				"edges", "high jump", "magic", "major", "object", "pages", "pigeon", "age", "bridge", "cage", "edge", "fudge", "huge",
				"judge", "page", "ridge", "stage"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "NG",
			level: "2",
			words: new Array("anger", "anguish", "banging", "Bengal", "England", "bang", "bring", "ding", "dong", "hang", "belonging",
				"bungalow", "chewing gum", "fingernail", "fingerprint", "asking", "baking", "bedding", "belong", "biking", "laughing",
				"painting", "playing", "raining", "running", "sitting", "sleeping", "swimming", "talking", "walking"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "N",
			level: "1",
			words: new Array("knees", "nap", "nest", "necklace", "knit", "nurse", "knife", "knock", "know", "nail", "bunny",
				"sunglasses", "peanut", "rainbow", "dinosaur", "banana", "canoe", "doughnut", "pony", "dinner", "brain", "brown", "bun",
				"can", "cane", "chain", "chin", "clean", "clown", "coin"),
			story1: new Array(),
			story2: new Array(),
			story3: new Array()}),
		Phonetics.insert({
			sound: "D",
			level: "2",
			words: new Array ("day", "dad", "dive", "end", "duck", "dentist", "dinner", "birthday", "good", "hide", "head", "medicine",
					"spider", "calendar",  "played", "wood", "ahead","salad", "outside", "daisy", "somebody", "video","lemonade",
					"doughnut","attitude", "medicine", "afraid", "expected", "decide", "decade"),
			story1: new Array (),
			story2: new Array (),
			story3: new Array ()}),
		Phonetics.insert({
			sound: "ZH",
			level: "4",
			words: new Array ("beige", "rouge", "Asia", "vision", "treasure", "visual", "garage", "television", "unusual", "confusion",
					"measurement", "usually", "visualize", "collision", "conclusion", "erosion", "inclusion", "conversion",
					"decision", "seizure", "leisure", "measureable", "supervision", "casual", "camouflage", "massage", 
					"prestige", "voyage", "mirage", "enclosure"),
			story1: new Array (),
			story2: new Array (),
			story3: new Array ()}),
	}


	return Meteor.methods({

		removeUserHistory: function() {
			return History.remove({userId: Meteor.userId()});
			},

		addFakeData: function() {
			s = new Date();
		if (History.find({userId: Meteor.userId()}).count() == 0) {
			return [ History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "ball", correct: true , time: new Date(s.getFullYear(), s.getMonth(), s.getDate() - 15)}),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "envelope", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "glove", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "belly", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "lamp", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 17) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "leaf", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "L" , word: "leaf", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "R" , word: "run", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "R" , word: "bird", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "R" , word: "rice", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "R" , word: "rice", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "march", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "mall", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "miss", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "milk", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "moose", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "timer", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "image", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "dream", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "mall", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "made", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "mouth", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "milk", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "M" , word: "milk", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "car", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "can", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "cold", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "cookies", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "cookies", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "K" , word: "coin", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "elephant", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "giraffe", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "cough", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "elf", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "feet", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "laughing", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "favorite", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "family", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "elephant", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "elephant", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "game" , sound: "F" , word: "giraffe", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),

			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "lunch", correct: true , time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 17) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "leg", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 17) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "violin", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "belly", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "lamp", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 18) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "leaf", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "L" , word: "leaf", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "R" , word: "rat", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "R" , word: "rose", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "R" , word: "rain", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "R" , word: "rain", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mammal", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "memorization", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 17) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "magnificent", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "pulm", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "moose", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "man", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "march", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mall", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "meet", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "milk", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mine", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "timer", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 9) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "image", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 9) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "human", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 9) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "dream", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 9) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "palm", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "tomato", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "maybe", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "machine", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "marshmallow", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "macaroni", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "made", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mouth", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mammal", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "M" , word: "mammal", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "cool", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 18) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "kid", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 18) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "color", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "cookies", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "cookies", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "K" , word: "coin", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "face", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "giraffe", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 16) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "cough", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "elf", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 13) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "feet", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 14) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "laughing", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "favorite", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "feet", correct: true, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 10) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "elephant", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 15) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "elephant", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 12) }),
			History.insert({userId: Meteor.userId(), mode: "workshop" , sound: "F" , word: "giraffe", correct: false, time: new Date(s.getFullYear(), s.getMonth(),s.getDate() - 11) })
		]}
		}
	});

});
