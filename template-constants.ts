export const WEEKLY_TODO_DIGEST_HTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body { font-family: Inter, Arial, sans-serif; background:#f8f9fa; color:#333; margin: 0; padding: 16px; }
      .wrapper { max-width:700px; margin:auto; background:#fff; border-radius:12px; padding:24px; border: 1px solid #dee2e6; }
      .header { border-bottom:2px solid #0b7285; padding-bottom:8px; margin-bottom:16px; }
      h1 { color:#0b7285; font-size:22px; margin: 0;}
      h2 { color:#1e647a; font-size:18px; margin-top: 28px; border-bottom: 1px solid #ced4da; padding-bottom: 6px;}
      .metrics-strip { width:100%; border-collapse: collapse; margin-top:16px; table-layout: fixed; }
      .metrics-strip td { text-align:center; padding: 12px 8px; border-right: 1px solid #dee2e6; }
      .metrics-strip td:last-child { border-right: none; }
      .metrics-strip h3 { margin:0; font-size: 14px; color: #495057; text-transform: uppercase; }
      .metrics-strip p { margin:4px 0 0 0; font-size: 14px; color: #212529;}
      .role-card ul { list-style-type: none; padding-left: 0; margin: 0; }
      .role-card li { margin-bottom: 8px; padding-left: 20px; position: relative; }
      .role-card li::before { content: '✓'; color: #20c997; position: absolute; left: 0; font-weight: bold; }
      .upcoming-tasks ul { list-style-type: none; padding-left: 0; }
      .upcoming-tasks li { background-color: #f1f3f5; padding: 8px 12px; border-radius: 6px; margin-bottom: 6px; font-size: 14px; }
      .footer { margin-top:24px; font-size:12px; color:#888; text-align:center; }
      .cta-buttons { text-align: center; margin-top: 20px; }
      .cta-buttons a { display: inline-block; padding: 10px 18px; margin: 0 8px; border-radius: 6px; text-decoration: none; font-weight: bold; }
      .cta-primary { background-color: #15aabf; color: #fff; }
      .cta-secondary { background-color: #e9ecef; color: #495057; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h1>Weekly Barton Operations Brief</h1>
        <p style="margin:4px 0 0; color:#868e96;">For: <strong>{{company_name}}</strong> | Week of {{period_start}}</p>
      </div>

      <!-- QUICK METRICS STRIP -->
      <table class="metrics-strip">
        <tr>
          <td>
            <h3>Advisor</h3>
            <p>✅ {{advisor_completed}} done<br>🔥 {{advisor_overdue}} open</p>
          </td>
          <td>
            <h3>HR</h3>
            <p>✅ {{hr_completed}} done<br>🕐 {{hr_pending}} pending</p>
          </td>
          <td>
            <h3>CFO</h3>
            <p>💰 {{cfo_reviewed}} reviewed<br>📅 {{cfo_due_next}} due</p>
          </td>
          <td>
            <h3>System</h3>
            <p>🤖 {{system_tasks}} automations<br>⚡ {{time_saved_hours}} hrs saved</p>
          </td>
        </tr>
      </table>

      <!-- ROLE BREAKDOWN CARDS -->
      <div class="role-card">
        <h2>Advisor Highlights</h2>
        <ul>{{#each advisor_points}}<li>{{this}}</li>{{/each}}</ul>
      </div>

      <div class="role-card">
        <h2>HR Highlights</h2>
        <ul>{{#each hr_points}}<li>{{this}}</li>{{/each}}</ul>
      </div>
      
      <div class="role-card">
        <h2>CFO Highlights</h2>
        <ul>{{#each cfo_points}}<li>{{this}}</li>{{/each}}</ul>
      </div>

      <div class="role-card">
        <h2>System Automations</h2>
        <ul>{{#each system_points}}<li>{{this}}</li>{{/each}}</ul>
      </div>

      <!-- UPCOMING PRIORITIES -->
      <div class="upcoming-tasks">
        <h2>Next Week’s Priorities</h2>
        <ul>{{#each upcoming_tasks}}<li>{{this}}</li>{{/each}}</ul>
      </div>
      
      <div class="cta-buttons">
          <a href="{{dashboard_url}}" class="cta-primary">📊 View Full Dashboard</a>
          <a href="{{ack_url}}" class="cta-secondary">✅ Acknowledge Weekly Brief</a>
      </div>

      <div class="footer">
        <p>Generated {{timestamp_generated}} by the Barton Operations Intelligence System</p>
      </div>
    </div>
  </body>
</html>
`;