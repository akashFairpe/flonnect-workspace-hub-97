
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  MessageCircle, 
  LogOut,
  Crown
} from 'lucide-react';

const UserSection: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john@company.com',
    avatar: '/placeholder.svg',
    plan: 'Enterprise'
  };

  return (
    <div className="border-t bg-white p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-xs">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">{user.name}</p>
            <div className="flex items-center space-x-1">
              <Badge variant="outline" className="text-xs h-4 px-1">
                <Crown className="w-2 h-2 mr-1" />
                {user.plan}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600">
            <MessageCircle className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600">
            <LogOut className="w-3 h-3" />
          </Button>
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-500">
          Storage: 2.4GB / 100GB used
        </p>
      </div>
    </div>
  );
};

export default UserSection;
