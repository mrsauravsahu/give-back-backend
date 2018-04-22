import meResolvers from './me';
import friendsResolvers from './friends';
import tripsResolvers from './trips';

export default {
  ...meResolvers,
  ...friendsResolvers,
  ...tripsResolvers,
};

