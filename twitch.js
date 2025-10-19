const twitchChannel = 'jaketheallosaurian';
const clientId = 'YOUR_TWITCH_CLIENT_ID';
const authToken = 'YOUR_APP_ACCESS_TOKEN';

async function fetchTwitchStats() {
  try {
    // 1: get user ID
    let resp = await fetch(`https://api.twitch.tv/helix/users?login=${twitchChannel}`, {
      headers: {
        'Client-Id': clientId,
        'Authorization': `Bearer ${authToken}`
      }
    });
    let data = await resp.json();
    const userId = data.data[0].id;

    // 2: get follower count
    resp = await fetch(`https://api.twitch.tv/helix/users/follows?to_id=${userId}`, {
      headers: {
        'Client-Id': clientId,
        'Authorization': `Bearer ${authToken}`
      }
    });
    data = await resp.json();
    const followerCount = data.total;

    // 3: get live stream info (viewers)
    resp = await fetch(`https://api.twitch.tv/helix/streams?user_id=${userId}`, {
      headers: {
        'Client-Id': clientId,
        'Authorization': `Bearer ${authToken}`
      }
    });
    data = await resp.json();
    const viewers = data.data.length > 0 ? data.data[0].viewer_count : 0;

    // 4: update DOM
    document.getElementById('twitch-followers').textContent = followerCount.toLocaleString();
    document.getElementById('twitch-viewers').textContent = viewers.toLocaleString();
  } catch (err) {
    console.error('Error fetching Twitch stats:', err);
    document.getElementById('twitch-followers').textContent = 'Error';
    document.getElementById('twitch-viewers').textContent = 'Error';
  }
}

// Run on load and every minute
fetchTwitchStats();
setInterval(fetchTwitchStats, 60000);
