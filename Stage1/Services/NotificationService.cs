using NotificationAPI.Models;

namespace NotificationAPI.Services;

public class NotificationService
{
    public List<Notification> GetNotifications()
    {
        return new List<Notification>
        {
            new() { Id = 1, Type = "Placement", Message = "Microsoft Hiring", Timestamp = DateTime.Now.AddMinutes(-10)},
            new() { Id = 2, Type = "Event", Message = "Tech Fest", Timestamp = DateTime.Now.AddMinutes(-5)},
            new() { Id = 3, Type = "Result", Message = "Exam Results", Timestamp = DateTime.Now.AddMinutes(-2)}
        };
    }

    private int GetPriority(string type)
    {
        return type switch
        {
            "Placement" => 3,
            "Result" => 2,
            "Event" => 1,
            _ => 0
        };
    }

    public List<Notification> GetTopNotifications()
    {
        return GetNotifications()
            .OrderByDescending(n => GetPriority(n.Type))
            .ThenByDescending(n => n.Timestamp)
            .Take(10)
            .ToList();
    }
}