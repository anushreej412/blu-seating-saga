import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const UserProfile = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-ibm-dark mb-8">User Profile</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <Input type="text" placeholder="John Doe" disabled />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            w3id Email
          </label>
          <Input type="email" placeholder="john.doe@ibm.com" disabled />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <Input type="text" placeholder="Engineering" disabled />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <Select defaultValue="personal">
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal Payment</SelectItem>
              <SelectItem value="manager">Manager Payment (Blu Dollars)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-ibm-blue hover:bg-blue-700 text-white">
          Update Profile
        </Button>
      </div>
    </div>
  );
};