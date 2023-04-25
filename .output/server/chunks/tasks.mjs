globalThis.__timing__.logStart('Load chunks/tasks');import { defineEventHandler, getQuery } from 'h3';
import { u as useRuntimeConfig } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

function TaskSerialize(el) {
  var _a, _b, _c, _d;
  return {
    id: el.id,
    name: el.name,
    description: el.description,
    priority: {
      color: (_b = (_a = el.priority) == null ? void 0 : _a.color) != null ? _b : "",
      name: (_d = (_c = el.priority) == null ? void 0 : _c.priority) != null ? _d : ""
    }
  };
}

const tasks = defineEventHandler(async (event) => {
  var _a;
  const runtimeConfig = useRuntimeConfig();
  const assignees = 36490261;
  const teamId = 4695717;
  const params = getQuery(event);
  const query = new URLSearchParams(
    Object.assign(
      {
        "subtasks": "true",
        "assignees[]": `${assignees}`,
        "include_closed": "true",
        "custom_task_ids": "true",
        "page": params.page
      }
    )
  );
  const response = await fetch(
    `https://api.clickup.com/api/v2/team/${teamId}/task?${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `${runtimeConfig.token}`
      }
    }
  );
  const data = (_a = await response.json()) == null ? void 0 : _a.tasks;
  const result = data.length ? data.map((task) => TaskSerialize(task)) : [];
  return result;
});

export { tasks as default };;globalThis.__timing__.logEnd('Load chunks/tasks');
//# sourceMappingURL=tasks.mjs.map
