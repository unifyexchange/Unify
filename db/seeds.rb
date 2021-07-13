# Seed data for Unify
Favorite.destroy_all
Report.destroy_all
Item.destroy_all
ItemImage.destroy_all
Condition.destroy_all
Category.destroy_all


Searchstring.destroy_all
Conversation.destroy_all
Message.destroy_all
School.destroy_all
User.destroy_all








# Create schools
school = School.create(name: "University of Redlands", description: "The Universirt of Redlands is a private, non-profit university situated on 160 acres near downtown", institution_size: 3169, location: "Redlands, California", phone: "(909) 793-2121", logo_image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Funiversity_of_redlands_logo.png?alt=media&token=186257de-48e7-4eca-9454-1ccdcd9955a5")

# Create users
user1 = User.create(email_address: "admin@unify.com", is_verified: true, school_id: school.id, first_name: "Admin", last_name: "Admin", password: "password")
# user2 = User.create(email_address: "don@joinhandshake.com", school_id: school.id, first_name: "Don", last_name: "Sirivat", password: "password")
# user3 = User.create(email_address: "user1@redlands.edu", school_id: school.id, first_name: "Katie", last_name: "Krizan", password: "password")
# user4 = User.create(email_address: "rolex@redlands.edu", school_id: school.id, first_name: "Tobias", last_name: "Harris", password: "password")
# user5 = User.create(email_address: "funny@redlands.edu", school_id: school.id, first_name: "Eli", last_name: "Gitelman", password: "password")
# user6 = User.create(email_address: "skycats@redlands.edu", school_id: school.id, first_name: "Aubrey", last_name: "Ellis", password: "password")
# user7 = User.create(email_address: "2134-945@redlands.edu", school_id: school.id, first_name: "Claire", last_name: "Rosenberg", password: "password")
# user8 = User.create(email_address: "shayna123@redlands.edu", school_id: school.id, first_name: "Shayna", last_name: "Denu", password: "password")
# user9 = User.create(email_address: "realperson@redlands.edu", school_id: school.id, first_name: "Blake", last_name: "Mohammad", password: "password")
# user10 = User.create(email_address: "admin@redlands.edu", school_id: school.id, first_name: "Victory", last_name: "Patryk", password: "password")
# user11 = User.create(email_address: "ryanmcduffie07@gmail.com", is_verified: true, school_id: school.id, first_name: "Ryan", last_name: "McDuffie", password: "password")

# Create categories
electronics = Category.create(name: "Electronics", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Felectronics_category.png?alt=media&token=5466136c-46ad-426b-aa7b-f5d191b64a05")
textbooks = Category.create(name: "Textbooks", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ftextbooks_category.png?alt=media&token=b837df7b-ef7c-4db0-94cd-5a93ce41b461")
apparel = Category.create(name: "Apparel", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fapparel_category.png?alt=media&token=22a08df4-3f0e-4f42-873b-eaca6f4c7828")
tickets = Category.create(name: "Tickets", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ftickets_category.png?alt=media&token=e4ae9b76-c8b4-4e07-b20e-e372f7376ace")
furniture = Category.create(name: "Furniture", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Ffurniture_category.png?alt=media&token=43cdd7aa-3744-47f3-be46-1b82181630c9")
beauty = Category.create(name: "Beauty & Health", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fbeauty_category.png?alt=media&token=76dc0e26-a255-4039-9cfd-f6b4d1c04069")
sports = Category.create(name: "Sports & Outdoor", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fsports_category.png?alt=media&token=376209f0-a075-48f2-a32f-403ec5f16456")
other = Category.create(name: "Other", image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fother_category.png?alt=media&token=538fc42a-3c8a-44ab-b385-b9bbde849643")

# Create conditions
new_condition = Condition.create(name: "New")
mint_condition = Condition.create(name: "Mint")
excellet_condition = Condition.create(name: "Excellent")
good_condition = Condition.create(name: "Good")
fair_condition = Condition.create(name: "Fair")
salvage_condition = Condition.create(name: "Salvage")

# Create items
item1 = Item.create(user_id: user1.id, name: "Fire TV Stick 4K with Alexa Voice Remote, streaming media player", subtitle: "The most powerful 4K streaming media stick with a Wi-Fi antenna", price: 35.00, description: "Launch and control content with the Alexa Voice Remote. Watch favorites from Netflix, YouTube, Prime Video, HBO, STARZ, SHOWTIME, and more, plus stream for free with Tubi, IMDb TV, and others.", condition_id: new_condition.id, category_id: electronics.id, school_id: school.id)
item2 = Item.create(user_id: user1.id, name: "Apple iPhone 7 Plus - 32GB - Black (Unlocked) A1661 (CDMA + GSM)", subtitle: "Item has passed 27-point inspection & is 100% fully functional & unlocked", price: 250.00, description: "This unlocked, black iPhone 7 Plus by Apple featuring a 5.5” retina display is powered by a 2.23GHz Quad Core processor, 3GB of RAM and offers 32GB of storage capacity. It comes with a 12MP primary camera, 7MP secondary camera and built-in lithium-ion battery. Additional features include a fingerprint sensor and water-resistant casing with oleophobic coating. This device is compatible with Straight Talk, Boost Mobile, Verizon, U.S. Cellular, TracFone, Xfinity, Sprint, Virgin Mobile Carriers.", condition_id: mint_condition.id, category_id: electronics.id, school_id: school.id)
item3 = Item.create(user_id: user1.id, name: "Samsung Galaxy Watch Active R500 - Black 4GB (Bluetooth 4.2) ", subtitle: "Barometer, Accelerometer, Water-Resistant, Sleep Monitor, Heart Rate Monitor, Gyroscope, GPS, Ambient Light Sensor", price: 375.00, description: "Brand new smart watch", condition_id: new_condition.id, category_id: electronics.id, school_id: school.id)
item4 = Item.create(user_id: user1.id, name: "Guyton and Hall Textbook of Medical Physiology (Guyton Physiology)", subtitle: "13th Edition", price: 25.00, description: "The 13th edition of Guyton and Hall Textbook of Medical Physiology continues this bestselling title's long tradition as the world’s foremost medical physiology textbook. Unlike other textbooks on this topic, this clear and comprehensive guide has a consistent, single-author voice and focuses on the content most relevant to clinical and pre-clinical students. The detailed but lucid text is complemented by didactic illustrations that summarize key concepts in physiology and pathophysiology.", condition_id: good_condition.id, category_id: textbooks.id, school_id: school.id)
item5 = Item.create(user_id: user1.id, name: "Digital Marketing Essentials: A Comprehensive Digital Marketing Textbook ", subtitle: "Great condition", price: 50.00, description: "Textbook for Business 101", condition_id: good_condition.id, category_id: textbooks.id, school_id: school.id)
item6 = Item.create(user_id: user1.id, name: "Business and Society: Stakeholders, Ethics, Public Policy (Irwin Accounting)", subtitle: "15th edition", price: 35.00, description: "The Fifteenth Edition of Business and Society: Stakeholders, Ethics, Public Policy draws on the latest research to address the challenges facing business organizations and their stakeholders. The text builds on its legacy of market leadership by reexamining central issues.", condition_id: fair_condition.id, category_id: textbooks.id, school_id: school.id)
item7 = Item.create(user_id: user1.id, name: "Longines HydroConquest Black Dial Automatic Mens Watch", subtitle: "Awesome Swiss made automatic watch", price: 850.00, description: "Swiss automatic movement from Longines, a pinnacle in the watch making industry.", condition_id: good_condition.id, category_id: apparel.id, school_id: school.id)
item8 = Item.create(user_id: user1.id, name: "LookbookStore Women's V Neck Mesh Panel Blouse 3/4 Bell Sleeve Loose Top Shirt", subtitle: "Super soft and comfortable", price: 15.00, description: "Casual wear or party, night out, summer holidays, going out and so on. Pair this women bell sleeves blouse with your ripped jeans pants for a stunning look.", condition_id: mint_condition.id, category_id: apparel.id, school_id: school.id)
item9 = Item.create(user_id: user1.id, name: "Drawstring Waist Long Workout Yoga Legging Active Pant with Pocket", subtitle: "100% Cotton. Soft and comfortable fabric", price: 10.00, description: "Breathable lightweight fabric. Perfect for yoga, jogger, workout, gym, run errands or casual wear", condition_id: mint_condition.id, category_id: apparel.id, school_id: school.id)
item10 = Item.create(user_id: user1.id, name: "Hamilton tickets", subtitle: "Two tickets this Saturday", price: 200.00, description: "Super close seats! Can't go anymore so selling these tickets", condition_id: new_condition.id, category_id: tickets.id, school_id: school.id)
item11 = Item.create(user_id: user1.id, name: "Leather Futon Sofa Bed Fold Up & Down Recliner Couch with Cup Holders", subtitle: "Black futon with real faux leather", price: 80.00, description: "Make a quick guest bed for visitors with a fully reclining backrest and removable armrests", condition_id: fair_condition.id, category_id: furniture.id, school_id: school.id)
item12 = Item.create(user_id: user1.id, name: "Extra Wide Dresser Storage Tower", subtitle: "Sturdy Steel Frame, Wood Top, Easy Pull Fabric Bins", price: 25.00, description: "Features 5 removable drawers; Use in or out of the closet and keep clutter under control by storing all of your clothing and accessories in one convenient place; Store and organize workout gear, leggings, yoga pants, sweaters, linens and more", condition_id: fair_condition.id, category_id: furniture.id, school_id: school.id)
item13 = Item.create(user_id: user1.id, name: "12 Inch Chime Express Memory Foam Mattress", subtitle: "Free! Super comfy mattress", price: 0.0, description: "Free memory foam mattress. Just need to pick up from dorms", condition_id: good_condition.id, category_id: furniture.id, school_id: school.id)
item14 = Item.create(user_id: user1.id, name: "New York Biology Dead Sea Mud Mask for Face and Body", subtitle: "Spa Quality Pore Reducer for Acne, Blackheads and Oily Skin", price: 10.0, description: "works for all skin types, including dry, normal, oily, combination, sensitive, and irritated. This daily acne treatment has been designed to be highly effective yet gentle enough for everyday use.", condition_id: new_condition.id, category_id: beauty.id, school_id: school.id)
item15 = Item.create(user_id: user1.id, name: "Gold Whey Protein", subtitle: "Brand new, unopened. Best flavor", price: 30.00, description: "OPTIMUM NUTRITION'S GOLD STANDARD 100% Whey uses pure Whey Protein Isolates as the primary ingredient. Combined with ultra-filtered whey protein concentrate, each serving provides 24 grams of all-whey protein and 5.5 grams of naturally occurring Branched Chain Amino Acids (BCAAs) which are prized by athletes for their muscle building qualities. With more than 20 tempting flavors to choose from, ON GOLD STANDARD 100% Whey gives you plenty of ways to keep workout recovery interesting.", condition_id: new_condition.id, category_id: beauty.id, school_id: school.id)
item16 = Item.create(user_id: user1.id, name: "2013 Jeep Wrangler Sahara", subtitle: "100556 miles", price: 9000.0, description: "5 speed automatic with a premium sound system. Drives great! Just don't really use it anymore so need to get rid of it.", condition_id: fair_condition.id, category_id: other.id, school_id: school.id)
item17 = Item.create(user_id: user1.id, name: "Noise Cancelling Headphones Bluetooth Headphones", subtitle: "Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime", price: 25.00, description: "Professional Active Noise Cancelling Technology. Significant noise reduction for travel, work and anywhere in between. Advanced active noise reduction technology quells airplane cabin noise, city traffic or a busy office, makes you focus on what you want to hear,enjoy your music, movies and videos. The noise cancellation function can work well both in wire and wireless mode.", condition_id: fair_condition.id, category_id: electronics.id, school_id: school.id)
item18 = Item.create(user_id: user1.id, name: "Nintendo switch with 2 free games", subtitle: "Comes with Mario Kart", price: 175.00, description: "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.", condition_id: good_condition.id, category_id: electronics.id, school_id: school.id)
item19 = Item.create(user_id: user1.id, name: "Integrated Chinese: Simplified Characters Textbook", subtitle: "Level 1 Part 1", price: 20.0, description: "I think I used it once", condition_id: mint_condition.id, category_id: textbooks.id, school_id: school.id)
item20 = Item.create(user_id: user1.id, name: "High Waist Yoga Pants", subtitle: "High waisted", price: 15.0, description: "Super comfy, only worned a couple of times", condition_id: mint_condition.id, category_id: apparel.id, school_id: school.id)

# Create item images
ItemImage.create(item_id: item1.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem1_1.png?alt=media&token=1d061fa1-dfe2-437c-97ad-843ce050aff0")
ItemImage.create(item_id: item1.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem1_2.png?alt=media&token=73b81fd8-8c1e-4ead-bfac-e9e5eb4e66e0")
ItemImage.create(item_id: item1.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem1_3.png?alt=media&token=5870f39f-6cb0-4092-bdf0-97a8ecb273c7")

ItemImage.create(item_id: item2.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem2_1.png?alt=media&token=eb813f50-9df5-481f-abe0-92295312f649")
ItemImage.create(item_id: item2.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem2_2.png?alt=media&token=689ed0a5-c836-46dd-893b-d2870cc24f9b")
ItemImage.create(item_id: item2.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem2_3.png?alt=media&token=9a169524-7031-4e4f-99f8-30700dbaf848")

ItemImage.create(item_id: item3.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem3_1.png?alt=media&token=9ffbcf94-61df-46f9-b99b-0e5442ae06fb")
ItemImage.create(item_id: item3.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem3_2.png?alt=media&token=f23279b4-f55e-4c2d-b40e-24b29201c947")

ItemImage.create(item_id: item4.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem4_1.png?alt=media&token=9c9cbb57-ce17-42ac-8708-17729a9f5236")
ItemImage.create(item_id: item4.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem4_2.png?alt=media&token=ded6713a-5fe6-44d1-8266-f09914590376")

ItemImage.create(item_id: item5.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem5_1.png?alt=media&token=6a64018c-6cb8-486d-a854-cfdecc8676e4")
ItemImage.create(item_id: item5.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem5_2.png?alt=media&token=c52752d3-4bd0-4b7a-b7c2-e4e32fab2279")

ItemImage.create(item_id: item6.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem6_1.png?alt=media&token=ec32c255-b2ae-47d0-b57d-9110e5a234a9")
ItemImage.create(item_id: item6.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem6_2.png?alt=media&token=18e7dd37-37aa-4606-a33e-50411bfb5e25")

ItemImage.create(item_id: item7.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem7_1.png?alt=media&token=a15d0f70-3311-4c0a-b691-07e53e0f7bfa")
ItemImage.create(item_id: item7.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem7_2.png?alt=media&token=4e450b90-b29a-45df-af88-1402386a1938")
ItemImage.create(item_id: item7.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem7_3.png?alt=media&token=4f62369a-f43a-46eb-9b71-d24e825d8311")

ItemImage.create(item_id: item8.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem8_1.png?alt=media&token=e4b8ddc9-5369-4cbe-9e47-148f5eafa4e7")
ItemImage.create(item_id: item8.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem8_2.png?alt=media&token=c8f4c086-5e3f-447b-a0e0-886848db77bf")

ItemImage.create(item_id: item9.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem9_1.png?alt=media&token=6c6925ef-816c-4c57-af06-a5dd1b2f8e88")
ItemImage.create(item_id: item9.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem9_2.png?alt=media&token=0be516e2-297a-4d11-a068-7b6eb002a1f1")
ItemImage.create(item_id: item9.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem9_3.png?alt=media&token=19950d14-bd9c-4a05-aae0-e3e51f1d58a9")

ItemImage.create(item_id: item10.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem10_1.png?alt=media&token=2a2dac65-c041-4e06-bf83-a516f371530b")
ItemImage.create(item_id: item10.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem10_2.png?alt=media&token=eb8b219d-f4a1-4d68-b00b-4c13da830256")

ItemImage.create(item_id: item11.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem11_1.png?alt=media&token=46950746-d270-4521-af03-071cba70a65a")
ItemImage.create(item_id: item11.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem11_2.png?alt=media&token=7981c317-0bfd-40c0-9d05-69874a206b1a")
ItemImage.create(item_id: item11.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem11_3.png?alt=media&token=8933942d-a39c-41de-a2e2-59a16f7736a3")

ItemImage.create(item_id: item12.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem12_1.png?alt=media&token=7be2370c-9204-4ee8-a68e-220f9eb4cbee")
ItemImage.create(item_id: item12.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem12_2.png?alt=media&token=15eb6910-dc65-45f0-8861-b95986f06bc7")

ItemImage.create(item_id: item13.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem13_1.png?alt=media&token=c5bd8f5f-d01f-4633-8dcc-2cf0773d157e")
ItemImage.create(item_id: item13.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem13_2.png?alt=media&token=82861f59-d6da-475c-8629-b005b672e507")
ItemImage.create(item_id: item13.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem13_3.png?alt=media&token=2ee6d633-6e6d-4f5e-bd20-06f78b045625")

ItemImage.create(item_id: item14.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem14_1.png?alt=media&token=c8ae2679-9998-411a-967c-9956c2c658c0")
ItemImage.create(item_id: item14.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem14_2.png?alt=media&token=fa9be174-de1c-4eee-9d55-7b0fb9707053")
ItemImage.create(item_id: item14.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem14_3.png?alt=media&token=817f529d-c2ed-4a40-affc-39c4a2cb09b2")
ItemImage.create(item_id: item14.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem14_4.png?alt=media&token=4ae46ce1-aba4-46fb-b049-8f3bd07887fa")

ItemImage.create(item_id: item15.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem15_1.png?alt=media&token=c37fdd6f-34e8-4f6e-b1b9-5e27eb8a9617")
ItemImage.create(item_id: item15.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem15_2.png?alt=media&token=dd1d8eb9-7746-4cea-aa4e-4871052b06b9")

ItemImage.create(item_id: item16.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem16_1.png?alt=media&token=71fbbf14-da30-4920-a9c5-a1cd5e0c395f")
ItemImage.create(item_id: item16.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem16_2.png?alt=media&token=a6e31589-ad1d-41bb-91fb-d99ebd09ed33")
ItemImage.create(item_id: item16.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem16_3.png?alt=media&token=765fca5b-bb40-43ab-b91d-150d3f98f57a")
ItemImage.create(item_id: item16.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem16_4.png?alt=media&token=ed1d290c-f3b5-4eca-b66a-5e054ab7a0a3")

ItemImage.create(item_id: item17.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem17_1.png?alt=media&token=dabd57c5-33de-4216-a4da-aa9ee6599af3")
ItemImage.create(item_id: item17.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem17_2.png?alt=media&token=a3538a2a-a203-46a4-b1e6-4b88f0ffce00")
ItemImage.create(item_id: item17.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem17_3.png?alt=media&token=214d45e4-b91d-4820-bdad-66ed267360df")

ItemImage.create(item_id: item18.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem18_1.png?alt=media&token=42ff80b4-8a81-40f2-bebf-6c6e3d3e8bf2")
ItemImage.create(item_id: item18.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem18_2.png?alt=media&token=74754e6c-0086-4b18-b918-01e0fc6c9d56")
ItemImage.create(item_id: item18.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem18_3.png?alt=media&token=0fce2d39-1508-4fbe-8d28-e05446085b25")

ItemImage.create(item_id: item19.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem19_1.png?alt=media&token=a43b1239-de28-4ed5-8c56-d3a95ec7a325")
ItemImage.create(item_id: item19.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem19_2.png?alt=media&token=03cbc4e2-6ea3-4e0f-9506-01e5f06ac5f1")

ItemImage.create(item_id: item20.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem20_1.png?alt=media&token=7229e60e-2c58-461f-b019-02599af6e8cd")
ItemImage.create(item_id: item20.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem20_2.png?alt=media&token=39d88cd0-8fa4-411d-b80a-e7ff302251b2")
ItemImage.create(item_id: item20.id, image_url: "https://firebasestorage.googleapis.com/v0/b/unify-aaba7.appspot.com/o/images%2Fitem20_3.png?alt=media&token=4e03fcb6-a345-41ff-9811-fa8cc9f5f10a")

# Create conversations

# conversation1 = Conversation.create(sender_id: user2.id, recipient_id: user1.id, item_id: item1.id)
# conversation2 = Conversation.create(sender_id: user2.id, recipient_id: user3.id, item_id: item3.id)
# conversation3 = Conversation.create(sender_id: user2.id, recipient_id: user4.id, item_id: item4.id)
# conversation4 = Conversation.create(sender_id: user2.id, recipient_id: user5.id, item_id: item5.id)
# conversation5 = Conversation.create(sender_id: user2.id, recipient_id: user6.id, item_id: item6.id)
# conversation6 = Conversation.create(sender_id: user2.id, recipient_id: user7.id, item_id: item7.id)
# conversation7 = Conversation.create(sender_id: user2.id, recipient_id: user8.id, item_id: item8.id)

# Create messages

