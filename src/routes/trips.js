import models from './../db/models';

export default [
  {
    path: '/api/trips',
    method: 'POST',
    handler: async (request) => {
      const {
        name, description, createdByUserId, memberUserIds,
      } = request.payload;

      try {
        // TODO: get createdByUserId from auth
        const newTrip = {
          name,
          description,
          createdByUserId,
        };

        const newTripEntity = await models.trips.create(newTrip);
        await Promise.all(memberUserIds.map(userId => models.tripMembers.create({
          userId,
          tripId: newTripEntity.id,
        })));

        const data = await models.trips.findById(
          newTripEntity.id,
          {
            include: [
              {
                model: models.users,
                as: 'members',
                through: 'tripMembers',
              },
            ],
          },
        );
        return data;
      } catch (error) { console.log(error.message); throw error; }
    },
  },
];

