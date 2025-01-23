import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const BookingHistory = () => {
  const mockBookings = [
    {
      id: 1,
      date: "2024-03-20",
      time: "12:00 PM",
      seats: 2,
      status: "Upcoming",
    },
    {
      id: 2,
      date: "2024-03-19",
      time: "1:30 PM",
      seats: 1,
      status: "Completed",
    },
  ];

  const handleCancel = (id: number) => {
    toast.success("Booking cancelled successfully");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-ibm-dark mb-8">Booking History</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Seats</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.date}</TableCell>
              <TableCell>{booking.time}</TableCell>
              <TableCell>{booking.seats}</TableCell>
              <TableCell>{booking.status}</TableCell>
              <TableCell>
                {booking.status === "Upcoming" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};