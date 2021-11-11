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

// VARIABLE FOR QUERY STRING REFACTORING
let user;
const userArray = [user1, user2];
const userParams = new URLSearchParams(window.location.search);
const paramUser = userParams.get('user');

if (paramUser === 'user1') {
  user = userArray[0];
} else {
  user = userArray[1];
}

// HEADER SECTION
const headerContainer = document.querySelector('.header-container');
const headerDisplayName = document.createElement('h4');
const headerTweetsNumber = document.createElement('h6');

headerDisplayName.textContent = user.displayName;
headerDisplayName.classList.add('header-name');
headerTweetsNumber.textContent = `${user.totalTweets}K Tweets`;
headerTweetsNumber.classList.add('total-tweets');
headerContainer.appendChild(headerDisplayName);
headerContainer.appendChild(headerTweetsNumber);

// HEADER BACKGROUND IMAGE
const headerImageContainer = document.querySelector('.header-photo-container');
const headerImage = document.createElement('img');
headerImage.src = user.coverPhotoURL;
headerImage.classList.add('header-image');
headerImageContainer.appendChild(headerImage);

//PROFILE DETAILS
const profileContainer = document.querySelector('.profile-info-container');
const profileAvatar = document.createElement('img');
const profileDisplayName = document.createElement('h5');
const profileUserName = document.createElement('h6');
const dateJoined = document.createElement('p');
const numberFollowingFollowersContainer = document.createElement('div');
const followingButton = document.createElement('button');
const timelineButton = document.createElement('button');

profileAvatar.src = user.avatarURL;
profileDisplayName.textContent = user.displayName;
profileUserName.textContent = user.userName;
dateJoined.textContent = `Joined ${user.joinedDate}`;
numberFollowingFollowersContainer.innerHTML = `
                      <h6 class="profile-num-following">${user.followingCount} <span class="color-grey">Following</span>
                      <h6 class="profile-num-followers">${user.followerCount} <span class="color-grey">Followers</span>
                      `;
followingButton.textContent = 'Following';
timelineButton.textContent = 'Tweet Timeline';

// Adding needed classes to elements above
profileAvatar.classList.add('profile-avatar-image');
profileDisplayName.classList.add('profile-display-name');
profileUserName.classList.add('profile-user-name');
dateJoined.classList.add('date-joined', 'color-grey');
followingButton.classList.add('following-button');
numberFollowingFollowersContainer.classList.add('profile-followers-container');
timelineButton.classList.add('timeline-button');

profileContainer.append(
  profileAvatar,
  profileDisplayName,
  profileUserName,
  dateJoined,
  numberFollowingFollowersContainer,
  followingButton,
  timelineButton
);

// TWEETS
const tweetContainer = document.querySelector('.tweets-container');
user.tweets.forEach(function (tweet) {
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
    </div>

  `;
  tweetContainer.appendChild(individualTweetContainer);
});

timelineButton.addEventListener('click', function () {
  document.location.href = 'timeline.html';
});
