/**
 * Participant 1 — Service Definition
 *
 * Instructions:
 * Find the YOUR TASK comment below and make your changes there.
 * This file belongs to Participant 1 — only you should edit it.
 */

const service = {
  id: "participant-1",
  name: "Nkosinathi Radebe",

  // ──────────────────────────────────────────
  // YOUR TASK: Change status to "active" and
  // update description to your current work focus
  // ──────────────────────────────────────────
  status: "active",
  description: "Update this with your current focus area",

  // Leave these alone
  createdAt: "2026-03-18",
  owner: "Nkosinathi", // Add your name here too if you like
};

function getStatus() {
  return `[${service.id}] ${service.name} is ${service.status}`;
}

function getDescription() {
  return service.description;
}

module.exports = { service, getStatus, getDescription };
