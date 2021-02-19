db.artists.updateOne(
  { name: 'Pink Floyd' },
  { $set: { description: 'Pink Floyd were an English rock band formed in London in 1965. Gaining a following as a psychedelic pop group, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre. Pink Floyd were one of the first British psychedelia groups, and are credited with influencing genres such as neo-progressive rock and ambient music.' } },
  { upsert: true }
);

db.artists.updateOne(
  { name: 'The Beatles' },
  { $set: { description: "The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time.[1] They were integral to the development of 1960s counterculture and popular music's recognition as an art form.[2] Rooted in skiffle, beat and 1950s rock and roll, their sound incorporated elements of classical music and traditional pop in innovative ways; the band later explored music styles ranging from ballads and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and sociocultural movements" } },
  { upsert: true }
);

db.artists.updateOne(
  { name: 'Led Zeppelin' },
  { $set: { description: "Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With their heavy, guitar-driven sound, they are regularly cited as one of the progenitors of heavy metal, although their style drew from a variety of influences, including blues and folk music. The band have been credited with majorly impacting the nature of the music industry, particularly in the development of album-orientated rock (AOR) and stadium rock. Many critics consider Led Zeppelin one of the most successful, innovative, and influential rock groups in history." } },
  { upsert: true }
);

// description like "%English rock band%"
db.artists.find({ description: { $regex: /English rock band/ } }, { name: true });
db.artists.count({ description: { $regex: /English rock band/ } });

// description like "Pink Floyd were%"
db.artists.find({ description: { $regex: /^Pink Floyd were/ } }, { name: true });

// description like "%influential rock groups in history"
db.artists.find({ description: { $regex: /influential rock groups in history.$/ } }, { name: true });