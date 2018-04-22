import models from '../db/models';

export const trips = async (id) => {
  const tripsData = await models.trips.getTripsAsync(id);


  const tripMemberPromises = tripsData.map(p => models.tripMembers.getTripMembersAsync(p.id));

  const tripMembers = await Promise.all(tripMemberPromises);

  return tripsData.map((trip, index) => ({
    ...(trip.toJSON()),
    members: tripMembers[index],
  }));
};


export default { trips };

