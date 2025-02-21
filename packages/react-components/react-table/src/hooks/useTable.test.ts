import { renderHook } from '@testing-library/react-hooks';
import { defaultTableSelectionState, useSelection } from './useSelection';
import { defaultTableSortState, useSort } from './useSort';
import { useTable } from './useTable';

describe('useTable', () => {
  it('should return sort state', () => {
    const { result } = renderHook(() =>
      useTable(
        {
          columns: [{ columnId: 1 }],
          items: [{}, {}, {}],
        },
        [useSort({})],
      ),
    );

    expect(result.current.sort).not.toBe(defaultTableSortState);
    expect(result.current.sort).toMatchInlineSnapshot(`
      Object {
        "getSortDirection": [Function],
        "setColumnSort": [Function],
        "sort": [Function],
        "sortColumn": undefined,
        "sortDirection": "ascending",
        "toggleColumnSort": [Function],
      }
    `);
  });

  it('should return selection state', () => {
    const { result } = renderHook(() =>
      useTable(
        {
          columns: [{ columnId: 1 }],
          items: [{}, {}, {}],
        },
        [useSelection({ selectionMode: 'multiselect' })],
      ),
    );

    expect(result.current.sort).not.toBe(defaultTableSelectionState);
    expect(result.current.sort).toMatchInlineSnapshot(`
      Object {
        "getSortDirection": [Function],
        "setColumnSort": [Function],
        "sort": [Function],
        "sortColumn": undefined,
        "sortDirection": "ascending",
        "toggleColumnSort": [Function],
      }
    `);
  });

  describe('getRows', () => {
    it('should enahnce rows', () => {
      const { result } = renderHook(() =>
        useTable({
          columns: [{ columnId: 1 }],
          items: [{}, {}, {}],
        }),
      );

      const rows = result.current.getRows(row => ({
        ...row,
        foo: 'bar',
      }));

      expect(rows).toMatchInlineSnapshot(`
        Array [
          Object {
            "foo": "bar",
            "item": Object {},
            "rowId": 0,
          },
          Object {
            "foo": "bar",
            "item": Object {},
            "rowId": 1,
          },
          Object {
            "foo": "bar",
            "item": Object {},
            "rowId": 2,
          },
        ]
      `);
    });

    it('should use custom rowId', () => {
      const { result } = renderHook(() =>
        useTable({
          columns: [{ columnId: 1 }],
          items: [{ value: 'a' }, { value: 'b' }, { value: 'c' }],
          getRowId: item => item.value,
        }),
      );

      const rows = result.current.getRows();
      expect(rows.map(row => row.rowId)).toEqual(['a', 'b', 'c']);
    });

    it('should return original items', () => {
      const { result } = renderHook(() =>
        useTable({
          columns: [{ columnId: 1 }],
          items: [{ value: 1 }, { value: 2 }, { value: 3 }],
        }),
      );

      const rows = result.current.getRows();
      expect(rows.map(row => row.item)).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }]);
    });
  });
});
