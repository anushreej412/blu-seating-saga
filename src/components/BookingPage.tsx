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
import { Armchair } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Simulate fetching seats data - in a real app this would be an API call
const fetchSeatsData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    totalSeats: 200,
    availableSeats: Math.floor(Math.random() * 50) + 100, // Random number between 100-150
  };
};

export const BookingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  // Fetch seats data with auto-refresh every 30 seconds
  const { data: seatsData, isLoading } = useQuery({
    queryKey: ["seats"],
    queryFn: fetchSeatsData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const handleBooking = () => {
    if (!selectedSeats || !selectedTime || !paymentMethod) {
      toast.error("Please select seats, time, and payment method");
      return;
    }
    setIsBooked(true);
    toast.success("Booking confirmed! Enjoy your lunch.");
  };

  const handleDone = () => {
    setIsBooked(false);
    setSelectedSeats("");
    setSelectedTime("");
    setPaymentMethod("");
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
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        {/* Available Seats Card with real-time updates */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Armchair className="h-8 w-8 text-ibm-blue" />
              <div>
                <h3 className="text-lg font-semibold">Available Seats</h3>
                {isLoading ? (
                  <p className="text-gray-600">Loading...</p>
                ) : (
                  <p className="text-gray-600">
                    {seatsData?.availableSeats} out of {seatsData?.totalSeats} total seats
                  </p>
                )}
              </div>
            </div>
            <span className="text-3xl font-bold text-ibm-blue">
              {isLoading ? "..." : seatsData?.availableSeats}
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <Select onValueChange={setPaymentMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Payment</SelectItem>
                    <SelectItem value="manager">
                      Manager Payment (Blu Dollars)
                    </SelectItem>
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
                <p className="text-green-600 mt-2">
                  Payment Method:{" "}
                  {paymentMethod === "manager"
                    ? "Manager Payment (Blu Dollars)"
                    : "Personal Payment"}
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