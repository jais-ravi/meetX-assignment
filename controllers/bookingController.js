import Booking from '../models/Booking.js';
import Activity from '../models/Activity.js';

export const bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const alreadyBooked = await Booking.findOne({
      user: req.user._id,
      activity: activityId,
    });

    if (alreadyBooked)
      return res.status(400).json({ message: 'You already booked this activity' });

    const booking = await Booking.create({
      user: req.user._id,
      activity: activityId,
    });

    res.status(201).json({ message: 'Activity booked', bookingId: booking._id });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed' });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('activity', 'title description location dateTime')
      .sort({ createdAt: -1 });

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found' });
    }

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch your bookings' });
  }
};