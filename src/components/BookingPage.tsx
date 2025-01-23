import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (!selectedSeats || !selectedTime) {
      toast.error("Please select both seats and time");
      return;
    }
    setIsBooked(true);
    toast.success("Booking confirmed! Enjoy your lunch.");
  };

  const handleDone = () => {
    setIsBooked(false);
    setSelectedSeats("");
    setSelectedTime("");
    toast.success("Thank you for using Blu-Reserve!");
  };

  const timeSlots = [
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
  ];

  return (
    <div className="min-h-screen bg-ibm-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-ibm-dark mb-8 text-center">
            Book Your Seat
          </h2>

          {!isBooked ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Seats
                </label>
                <Select onValueChange={setSelectedSeats}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select seats" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "seat" : "seats"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <Select onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleBooking}
                className="w-full bg-ibm-blue hover:bg-blue-700 text-white"
              >
                Confirm Booking
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-green-600">
                  {selectedSeats} seat(s) reserved for {selectedTime}
                </p>
              </div>

              <Button
                onClick={handleDone}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Done with Lunch
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};