const freq = {};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Posts with 6 or more words: ");
    console.log("");
    console.log("");
    console.log("");

    data.map((post) => {
      if (post.title.length > 6) {
        console.log(post.title);
      }
    });

    data.map((post) => {
      const headers = post.body.split(" ");
      headers.map((each) => {
        if (freq[each]) {
          freq[each]++;
        } else {
          freq[each] = 1;
        }
      });
    });
    Object.keys(freq).map((key) => {
      console.log(`${key} = ${freq[key]}`);
    });
  });
