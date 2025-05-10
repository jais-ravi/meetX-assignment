import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Activity from './models/Activity.js';

dotenv.config();

const activities = [
  {
    title: 'Football Match',
    description: 'A friendly match between local teams.',
    location: 'City Stadium',
    date: new Date('2025-05-20'),
    time: '18:00',
  },
  {
    title: 'Movie Night',
    description: 'Watch the latest blockbuster with friends.',
    location: 'Downtown Cinema',
    date: new Date('2025-05-22'),
    time: '20:00',
  },
  {
    title: 'Cricket Tournament',
    description: 'Inter-college cricket tournament finals.',
    location: 'University Grounds',
    date: new Date('2025-05-25'),
    time: '15:30',
  },
  {
    title: 'Music Concert',
    description: 'Live performance by top artists.',
    location: 'Open Air Theatre',
    date: new Date('2025-05-30'),
    time: '19:00',
  },
  {
    title: 'Art Exhibition',
    description: 'Explore art by local painters.',
    location: 'Art Gallery, Sector 17',
    date: new Date('2025-06-01'),
    time: '11:00',
  }
];

const seedActivities = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Activity.deleteMany();
    const result = await Activity.insertMany(activities);
    console.log(`Inserted ${result.length} activities`);
    process.exit();
  } catch (err) {
    console.error('Failed to seed activities:', err);
    process.exit(1);
  }
};

seedActivities();