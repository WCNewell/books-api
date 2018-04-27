
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex("book").insert([
        {
          title: "You Are A Badass",
          author: "Jen Cincero",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/51ypp1C%2B97L._SX315_BO1,204,203,200_.jpg"
        },
        {
          title: "The Chemistry of Calm",
          author: "Henry Emmons",
          cover_image:
            "https://images-na.ssl-images-amazon.com/images/I/51GGWRtBP8L._SX354_BO1,204,203,200_.jpg"
        }
      ])
    })
}
