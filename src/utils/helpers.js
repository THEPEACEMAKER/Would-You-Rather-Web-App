export function votesStat (votes1, votes2) {
  const optionOneNum = votes1.length;
  const optionTwoNum = votes2.length;
  const total = optionOneNum + optionTwoNum;
  const optionOnePercent = (100 * optionOneNum) / total;
  const optionTwoPercent = (100 * optionTwoNum) / total;

  return {
    optionOneNum,
    optionTwoNum,
    total,
    optionOnePercent,
    optionTwoPercent
  }
}


export function formatQuestion (question, author, authedUser) {
  const { id, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  return {
    qid: id,
    authorName: name,
    authorAvatar: avatarURL,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    votes: votesStat(optionOne.votes, optionTwo.votes),
    answer: optionOne.votes.includes(authedUser)? 'optionOne' : (optionTwo.votes.includes(authedUser)? 'optionTwo' : null)
  }
}

export function formatUserRank (user, rank) {
  const { name, avatarURL, answers, questions } = user
  const questionsNumber = questions.length
  const answersNumber = Object.keys(answers).length
  const score = questionsNumber + answersNumber


  return {
    name,
    avatarURL,
    questionsNumber,
    answersNumber,
    score,
    rank
  }
}
