import { test, expect } from '@playwright/test';
test.describe("Test each header", () => {

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1600, height: 1200 });
  });

  test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'screenshots/' + Date.now() + ".png" });
  })

  test('Test Schedule view', async ({ page, baseURL }) => {
    // Go to https://pui-pt.iteso.mx/schedule
    await page.goto(baseURL + '/schedule');
    expect(page.url()).toBe('https://pui-pt.iteso.mx/schedule')
    // Validate table headers
    await expect(page.locator('text=Programa')).toHaveText('Programa');
    await expect(page.locator('text=Nombre')).toHaveText('Nombre');
    await expect(page.locator('text=Fecha inicio')).toHaveText('Fecha inicio');
    await expect(page.locator('text=Fecha fin')).toHaveText('Fecha fin');
    await expect(page.locator('text=Descripción')).toHaveText('Descripción');
    await expect(page.locator('text=Personas registradas')).toHaveText('Personas registradas');
    await expect(page.locator('text=Tipo')).toHaveText('Tipo');
  })
  test('Test Courses view', async ({ page, baseURL }) => {
    // Go to https://pui-pt.iteso.mx/courses
    await page.goto('/courses');
    expect(page.url()).toBe(baseURL + '/courses')
    // Validate table headers
    await expect.soft(page.locator('text=Cursos')).toHaveText('Cursos');
    await expect.soft(page.locator('text=ID >> nth=0')).toHaveText('ID');
    await expect.soft(page.locator('text=Fecha inicio')).toHaveText('Fecha inicio');
    await expect.soft(page.locator('text=Fecha fin')).toHaveText('Fecha fin');
    await expect.soft(page.locator('text=Nombre')).toHaveText('Nombre');
    await expect.soft(page.locator('text=URL')).toHaveText('URL');
    await expect.soft(page.locator('text=Capacidad')).toHaveText('Capacidad');
    await expect.soft(page.locator('text=Descripción')).toHaveText('Descripción');
    await expect.soft(page.locator('text=Sesiones')).toHaveText('Sesiones');
    await expect.soft(page.locator('text=Días')).toHaveText('Días');
    await expect.soft(page.locator('text=Foto')).toHaveText('Foto');
    await expect.soft(page.locator('text=Personas registradas')).toHaveText('Personas registradas');
    await expect.soft(page.locator('text=Instructor')).toHaveText('Instructor');
    await expect.soft(page.locator('text=Estatus')).toHaveText('Estatus');
  })
  test('Test Workshops view', async ({ page, baseURL }) => {
    // Go to https://pui-pt.iteso.mx/workshops
    await page.goto('/workshops');
    expect(page.url()).toBe(baseURL + '/workshops')
    // Validate table headers
    await expect.soft(page.locator('text=Talleres')).toHaveText('Talleres');
    await expect.soft(page.locator('text=ID >> nth=0')).toHaveText('ID');
    await expect.soft(page.locator('text=Fecha inicio')).toHaveText('Fecha inicio');
    await expect.soft(page.locator('text=Fecha fin')).toHaveText('Fecha fin');
    await expect.soft(page.locator('text=Nombre')).toHaveText('Nombre');
    await expect.soft(page.locator('text=URL')).toHaveText('URL');
    await expect.soft(page.locator('text=Capacidad')).toHaveText('Capacidad');
    await expect.soft(page.locator('text=Descripción')).toHaveText('Descripción');
    await expect.soft(page.locator('text=Estatus')).toHaveText('Estatus');
  })
  test('Test Instructors view', async ({ page, baseURL }) => {
    // Go to https://pui-pt.iteso.mx/instructors
    await page.goto('/instructors');
    expect(page.url()).toBe(baseURL + '/instructors')
    // Validate table headers
    await expect.soft(page.locator('text=Instructores')).toHaveText('Instructores');
    await expect.soft(page.locator('text=ID >> nth=0')).toHaveText('ID');
    await expect.soft(page.locator('text=Nombre')).toHaveText('Nombre');
    await expect.soft(page.locator('text=Apellido paterno')).toHaveText('Apellido paterno');
    await expect.soft(page.locator('text=Apellido materno')).toHaveText('Apellido materno');
    await expect.soft(page.locator('text=Correo')).toHaveText('Correo');
    await expect.soft(page.locator('text=Teléfono')).toHaveText('Teléfono');
    await expect.soft(page.locator('text=Celular')).toHaveText('Celular');
    await expect.soft(page.locator('text=Descripción')).toHaveText('Descripción');
    await expect.soft(page.locator('text=Foto')).toHaveText('Foto');
    await expect.soft(page.locator('text=Estatus')).toHaveText('Estatus');

  })
});