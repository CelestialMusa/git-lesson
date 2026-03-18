/**
 * Participant 10 — Service Definition
 *
 * Instructions:
 * Find the YOUR TASK comment below and make your changes there.
 * This file belongs to Participant 10 — only you should edit it.
 */

const service = {
  id: "participant-10",
  name: "Participant 10 Service",

  // ──────────────────────────────────────────
  // YOUR TASK: Change status to "active" and
  // update description to your current work focus
  // ──────────────────────────────────────────
  status: "active",
  description: "Update this with your current focus area",

  // Leave these alone
  createdAt: "2026-03-18",
  owner: Kgothatso-Mokgashi, // Add your name here too if you like
};

function getStatus() {
  return `[${service.id}] ${service.name} is ${service.status}`;
}

function getDescription() {
  return service.description;
}

module.exports = { service, getStatus, getDescription };
