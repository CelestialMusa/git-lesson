/**
 * Participant 3 — Service Definition
 *
 * Instructions:
 * Find the YOUR TASK comment below and make your changes there.
 * This file belongs to Participant 3 — only you should edit it.
 */

const service = {
  id: "participant-8",
  name: "Participant 8 Service",

  // ──────────────────────────────────────────
  // YOUR TASK: Change status to "active" and
  // update description to your current work focus
  // ──────────────────────────────────────────
  status: "active",
  description: "Currently focusing on refining UI components, improving sidebar functionality.",

  // Leave these alone
  createdAt: "2026-03-18",
  owner: "Tiyane",
};

function getStatus() {
  return `[${service.id}] ${service.name} is ${service.status}`;
}

function getDescription() {
  return service.description;
}

module.exports = { service, getStatus, getDescription };