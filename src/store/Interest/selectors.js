export const selectInterestsForGroup = (state, props) => {
  return state.interests.filter(interest => interest.interestGroupId === props.interestGroup.id)
};
