const LinksSocialMedia = {
  github: 'GustavoRuiz205',
  youtube: 'channel/UCBqTjQVpMBbudqjKjzw8LJw',
  facebook: 'gustavoruizprestes.ruiz.5',
  instagram: 'gustavokatsuo',
  twitter: 'gustavoprestesr'
}

function changeSocialMediaLinksg() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    //alert(li.children[0].href)
    //[0]: O <a> está na posição 0, ela é filho da <li>, o <img> está na posição 1
  }
}

changeSocialMediaLinksg()

/*
function getGitHubProfileInfos() {
  const url = `http://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
*/
