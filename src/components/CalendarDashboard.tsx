
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Video, VideoOff, Play, Square, Settings } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import MeetingRecording from './MeetingRecording';
import { useToast } from '@/hooks/use-toast';

interface Meeting {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  attendees: number;
  platform: 'google' | 'teams';
  status: 'upcoming' | 'ongoing' | 'completed';
  isRecording?: boolean;
  recordingUrl?: string;
}

const CalendarDashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isRecordingEnabled, setIsRecordingEnabled] = useState(true);
  const { toast } = useToast();

  // Dummy meeting data
  const meetings: Meeting[] = [
    {
      id: '1',
      title: 'Product Strategy Meeting',
      startTime: '09:00',
      endTime: '10:30',
      attendees: 8,
      platform: 'teams',
      status: 'upcoming',
    },
    {
      id: '2',
      title: 'Design Review Session',
      startTime: '11:00',
      endTime: '12:00',
      attendees: 5,
      platform: 'google',
      status: 'ongoing',
      isRecording: true,
    },
    {
      id: '3',
      title: 'Weekly Standup',
      startTime: '14:00',
      endTime: '14:30',
      attendees: 12,
      platform: 'teams',
      status: 'upcoming',
    },
    {
      id: '4',
      title: 'Client Presentation',
      startTime: '16:00',
      endTime: '17:00',
      attendees: 6,
      platform: 'google',
      status: 'completed',
      recordingUrl: 'https://example.com/recording/4',
    },
  ];

  const todayMeetings = meetings.filter(meeting => {
    const today = new Date().toDateString();
    return selectedDate?.toDateString() === today;
  });

  const toggleGlobalRecording = () => {
    setIsRecordingEnabled(!isRecordingEnabled);
    toast({
      title: isRecordingEnabled ? "Auto-recording Disabled" : "Auto-recording Enabled",
      description: isRecordingEnabled 
        ? "Meetings will not be recorded automatically" 
        : "Meetings will be recorded automatically",
    });
  };

  const getPlatformColor = (platform: string) => {
    return platform === 'google' ? 'bg-blue-500' : 'bg-purple-500';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-500';
      case 'upcoming': return 'bg-yellow-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Calendar & Recording Dashboard</h1>
        <div className="flex gap-2">
          <Button
            onClick={toggleGlobalRecording}
            variant={isRecordingEnabled ? "default" : "outline"}
          >
            {isRecordingEnabled ? <Video className="w-4 h-4 mr-2" /> : <VideoOff className="w-4 h-4 mr-2" />}
            Auto-recording {isRecordingEnabled ? 'On' : 'Off'}
          </Button>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="recordings">Recordings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Today's Meetings</p>
                    <p className="text-2xl font-bold">{todayMeetings.length}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Recordings</p>
                    <p className="text-2xl font-bold">
                      {meetings.filter(m => m.isRecording).length}
                    </p>
                  </div>
                  <Video className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Attendees</p>
                    <p className="text-2xl font-bold">
                      {todayMeetings.reduce((sum, m) => sum + m.attendees, 0)}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Recording Time</p>
                    <p className="text-2xl font-bold">2h 45m</p>
                  </div>
                  <Clock className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{meeting.title}</h3>
                        <Badge className={`text-white ${getPlatformColor(meeting.platform)}`}>
                          {meeting.platform}
                        </Badge>
                        <Badge className={`text-white ${getStatusColor(meeting.status)}`}>
                          {meeting.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {meeting.startTime} - {meeting.endTime} • {meeting.attendees} attendees
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {meeting.status === 'ongoing' && (
                        <MeetingRecording 
                          meetingId={meeting.id}
                          meetingTitle={meeting.title}
                          isRecording={meeting.isRecording || false}
                        />
                      )}
                      {meeting.recordingUrl && (
                        <Button size="sm" variant="outline">
                          <Play className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                {todayMeetings.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No meetings scheduled for today
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Video className="w-4 h-4 mr-2" />
                  Start Manual Recording
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sync Google Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sync Teams Calendar
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Recording Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>
                  Meetings for {selectedDate?.toLocaleDateString() || 'Today'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {meetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{meeting.title}</h3>
                        <Badge className={`text-white ${getPlatformColor(meeting.platform)}`}>
                          {meeting.platform}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {meeting.startTime} - {meeting.endTime}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{meeting.attendees}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recordings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Recordings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {meetings
                  .filter(meeting => meeting.recordingUrl || meeting.isRecording)
                  .map((meeting) => (
                    <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-medium">{meeting.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {meeting.startTime} - {meeting.endTime} • {meeting.attendees} attendees
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {meeting.isRecording ? (
                          <Badge className="bg-red-500 text-white">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                            Recording
                          </Badge>
                        ) : (
                          <Button size="sm" variant="outline">
                            <Play className="w-4 h-4 mr-1" />
                            Play Recording
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CalendarDashboard;
