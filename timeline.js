let user1 = {
  userName: '@elonmusk',
  displayName: 'Elon Musk',
  totalTweets: 13.6,
  joinedDate: 'June 2009',
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: 'assets/elonmusk.jpg',
  coverPhotoURL: 'assets/elonmusk-cover.jpeg',
  tweets: [
    {
      text: 'I admit to judging books by their cover',
      timestamp: '2/10/2021 00:01:20',
    },
    {
      text: 'Starship to the moon',
      timestamp: '2/09/2021 18:37:12',
    },
    {
      text: 'Out on launch pad, engine swap underway',
      timestamp: '2/09/2021 12:11:51',
    },
  ],
};

let user2 = {
  userName: '@BillGates',
  displayName: 'Bill Gates',
  joinedDate: 'June 2009',
  totalTweets: 11.6,
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: 'assets/billgates.jpg',
  coverPhotoURL: 'assets/billgates-cover.jpeg',
  tweets: [
    {
      text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
      timestamp: '2/10/2021 00:01:20',
    },
    {
      text: 'Should I start tweeting memes? Let me know in a comment.',
      timestamp: '2/09/2021 18:37:12',
    },
    {
      text: 'In 2020, I read a book every hour.',
      timestamp: '2/09/2021 12:11:51',
    },
  ],
};

const mainContainer = document.querySelector('.main-container');
const tweetArray = [];
const bothUsers = [user1, user2];
let user;

function tweetExtract(obj) {
  obj.tweets.forEach(function (tweet) {
    tweetArray.push(tweet);
  });
}

tweetExtract(user1);
tweetExtract(user2);

function sortDates(arr) {
  arr.forEach(function (time) {
    time.timestamp = new Date(time.timestamp);
    arr.sort(function (x, y) {
      return y.timestamp - x.timestamp;
    });
  });
}

sortDates(tweetArray);

function setUser() {
  bothUsers.forEach(function (element) {
    console.log(element.displayName);
    if (element.displayName === 'Elon Musk') {
      user = user1;
    } else {
      user = user2;
    }
  });
}

const mainTweetsContainer = document.querySelector('.tweets-container');
tweetArray.forEach(function (tweet) {
  setUser();
  const individualTweetContainer = document.createElement('div');
  individualTweetContainer.classList.add('individual-tweet-container');
  individualTweetContainer.innerHTML = `
      <div class="tweet-avatar-container">
        <img class="tweet-avatar-image" src="${user.avatarURL}">
      </div>
      <div class="tweet-content-container">
        <div class="tweet-content-upper">
          <h5 class="tweet-display-name">${user.displayName}</h5>
          <h6 class="tweet-user-name">${user.userName}</h6>
          <h6 class="tweet-time-ago">${tweet.timestamp}</h6>
        </div>
        <div class="tweet-content-lower">
          <p class="tweet-content">${tweet.text}</p>
        </div>
      </div>`;
  mainTweetsContainer.appendChild(individualTweetContainer);
});

const goBackToProfileButton = document.createElement('button');
goBackToProfileButton.textContent = 'Back To Twitter';
goBackToProfileButton.classList.add('return-profile');

mainContainer.appendChild(goBackToProfileButton);

goBackToProfileButton.addEventListener('click', function () {
  document.location.href = 'index.html';
});
