
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, Clock, Users, Video, X, Filter, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Meeting {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  attendees: number;
  organizer: string;
  date: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  isRecording?: boolean;
  platform: 'google' | 'outlook';
}

const CalendarDashboard = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showConnectionWarning, setShowConnectionWarning] = useState(true);
  const { toast } = useToast();

  // Dummy meeting data matching the design
  const meetings: Meeting[] = [
    {
      id: '1',
      title: 'Test',
      startTime: '5:00 pm',
      endTime: '5:30 pm',
      attendees: 0,
      organizer: 'Gautam Kumar',
      date: '13 June 2025',
      platform: 'google',
      status: 'upcoming',
      isRecording: true,
    },
    {
      id: '2',
      title: 'Test',
      startTime: '5:30 am',
      endTime: '5:30 am',
      attendees: 0,
      organizer: 'Gautam Kumar',
      date: '20 June 2025',
      platform: 'google',
      status: 'upcoming',
    },
  ];

  const connectGoogleCalendar = () => {
    toast({
      title: "Connecting to Google Calendar",
      description: "This would connect to Google Calendar in a real implementation",
    });
  };

  const getRecordingStatus = (meeting: Meeting) => {
    if (meeting.isRecording) {
      return (
        <Badge className="bg-red-500 text-white">
          <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
          Recording Now
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="text-gray-500">
        Not Started Yet
      </Badge>
    );
  };

  const upcomingMeetings = meetings.filter(m => m.status === 'upcoming');
  const pastMeetings = meetings.filter(m => m.status === 'completed');

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-6">Calendar</h1>
        
        {showConnectionWarning && (
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <AlertDescription className="text-gray-700">
                  Google Calendar is not connected! Please Sync your Outlook Calendar for Upcoming Meetings
                </AlertDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  onClick={connectGoogleCalendar}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Connect Google Calendar
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConnectionWarning(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Alert>
        )}

        <div className="flex items-center justify-between">
          <div className="flex bg-gray-200 rounded-lg p-1">
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'upcoming' 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-transparent text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Meetings
            </Button>
            <Button
              variant={activeTab === 'past' ? 'default' : 'ghost'}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'past' 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-transparent text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Meetings
            </Button>
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {activeTab === 'upcoming' && upcomingMeetings.map((meeting) => (
          <Card key={meeting.id} className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-orange-400 rounded-sm mt-1"></div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {meeting.startTime} - {meeting.endTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {meeting.attendees}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {meeting.organizer}
                  </div>
                  <div className="text-sm text-gray-500">{meeting.date}</div>
                  {getRecordingStatus(meeting)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {activeTab === 'past' && pastMeetings.length === 0 && (
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No past meetings to display</p>
            </CardContent>
          </Card>
        )}

        {activeTab === 'upcoming' && upcomingMeetings.length === 0 && (
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No upcoming meetings scheduled</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CalendarDashboard;
