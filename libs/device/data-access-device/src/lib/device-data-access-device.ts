import { prisma } from '@smart-home/shared/utils/db';

export const getRoomsList = async () => {
  return prisma.rooms.findMany();
};
