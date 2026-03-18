/**
 * Participant 4 — Service Definition
 *
 * Instructions:
 * Find the YOUR TASK comment below and make your changes there.
 * This file belongs to Participant 4 — only you should edit it.
 */

const service = {
  id: "participant-4",
  name: "Participant 4 Service",

  // ──────────────────────────────────────────
  // YOUR TASK: Change status to "active" and
  // update description to your current work focus
  // ──────────────────────────────────────────
  status: "active",
  description: "DSSOH",

  // Leave these alone
  createdAt: "2026-03-18",
  owner: Busisiwe, // Add your name here too if you like
};

function getStatus() {
  return `[${service.id}] ${service.name} is ${service.status}`;
}

function getDescription() {
  return service.description;
}

module.exports = { service, getStatus, getDescription };
