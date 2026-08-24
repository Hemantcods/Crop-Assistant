import apiClient from './apiClient';

const toNotification = (alert) => ({
  ...alert,
  isRead: Boolean(alert.readAt),
  desc: alert.message,
  time: new Date(alert.createdAt).toLocaleString([], {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }),
  type: alert.type.toLowerCase(),
  severity: alert.severity === 'CRITICAL' ? 'error' : alert.severity.toLowerCase(),
});

export const notificationService = {
  async send(notification) {
    const response = await apiClient.post('/notification', notification);
    return response.data.data ? toNotification(response.data.data) : null;
  },
  async getAll() {
    const response = await apiClient.get('/notification');
    return response.data.data.map(toNotification);
  },
  async markAsRead(notificationId) {
    const response = await apiClient.patch(`/notification/${notificationId}/read`);
    return toNotification(response.data.data);
  },
  async markAllAsRead() {
    await apiClient.patch('/notification/read-all');
  },
  async dismiss(notificationId) {
    await apiClient.delete(`/notification/${notificationId}`);
  },
  async getPreferences() {
    const response = await apiClient.get('/notification/preferences');
    return response.data.data;
  },
  async updatePreferences(preferences) {
    const response = await apiClient.patch('/notification/preferences', preferences);
    return response.data.data;
  },
};
